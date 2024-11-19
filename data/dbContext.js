const { application } = require("express");
const dbConfig = require("../config/dbConfig");
const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USERNAME,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.DIALECT,
    port: dbConfig.PORT,
  }
);

const User = require("../data/UserModel")(sequelize, DataTypes);
const Address = require("../data/AddressModel")(sequelize, DataTypes);
const Student = require("../data/StudentModel")(sequelize, DataTypes);
const Family = require("../data/FamilyModel")(sequelize, DataTypes);
const Status = require("../data/StatusModel")(sequelize, DataTypes);
const Discipline = require("../data/DisciplineModel")(sequelize, DataTypes);
const Team = require("../data/TeamModel")(sequelize, DataTypes);
const Ranking = require("../data/RankingModel")(sequelize, DataTypes);
const Teacher = require("../data/TeacherModel")(sequelize, DataTypes);
const Class = require("../data/ClassModel")(sequelize, DataTypes);
const Lesson = require("../data/LessonModel")(sequelize, DataTypes);
const Exam = require("../data/ExamModel")(sequelize, DataTypes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Conectado com sucesso!");
  })
  .catch((err) => {
    console.log("Erro ao tentar conectar: " + err);
  });

sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Tabelas criadas com sucesso!");
  })
  .catch((err) => {
    console.log("Erros: " + err);
  });


// Relação entre User e Address
User.hasMany(Address, {
  foreignKey: "user_id",
  as: "addresses", // Um usuário pode ter vários endereços
});
Address.belongsTo(User, {
  foreignKey: "user_id",
  as: "user", // Um endereço pertence a um único usuário
});

// Relação entre Student e User
Student.belongsTo(User, {
  foreignKey: "user_id",
  as: "user", // Um estudante está associado a um único usuário
});
User.hasOne(Student, {
  foreignKey: "user_id",
  as: "student", // Um usuário pode ser um estudante
});

// Relação entre User e Family
User.belongsTo(Family, {
  foreignKey: "family_id",
  as: "family", // Um usuário pertence a uma única família
});
Family.hasMany(User, {
  foreignKey: "family_id",
  as: "users", // Uma família pode ter vários usuários
});

// Relação entre Student e Status
Student.belongsTo(Status, {
  foreignKey: "status_id",
  as: "status", // Um estudante tem um único status
});
Status.hasOne(Student, {
  foreignKey: "status_id",
  as: "student", // Um status está associado a um único estudante
});

// Relação entre Status e Discipline
Status.belongsTo(Discipline, {
  foreignKey: "discipline_id",
  as: "discipline", // Um status pertence a uma disciplina
});

// Relação entre Team (Equipe) e User
Team.hasMany(Student, {
  foreignKey: "team_id",
  as: "members", // Uma equipe pode ter vários usuários
});
Student.belongsTo(Team, {
  foreignKey: "team_id",
  as: "team", // Um usuário pertence a uma única equipe
});

// Relação entre Ranking e Team
Ranking.belongsTo(Team, {
  foreignKey: "team_id",
  as: "team", // Um ranking pertence a uma equipe
});
Team.hasOne(Ranking, {
  foreignKey: "team_id",
  as: "ranking", // Uma equipe tem um único ranking
});

// Relação entre Teacher e User
Teacher.belongsTo(User, {
  foreignKey: "user_id",
  as: "user", // Um professor está associado a um único usuário
});
User.hasOne(Teacher, {
  foreignKey: "user_id",
  as: "teacher", // Um usuário pode ser um professor
});

// Relação entre Teacher e Class (Turmas)
Teacher.belongsToMany(Class, {
  through: "ClassTeacher", // Tabela intermediária para representar as turmas do professor
  foreignKey: "teacher_id",
  otherKey: "class_id",
  as: "classes", // Um professor pode ter várias turmas
});
Class.belongsToMany(Teacher, {
  through: "ClassTeacher", // Tabela intermediária
  foreignKey: "class_id",
  otherKey: "teacher_id",
  as: "teachers", // Uma turma pode ter vários professores
});

// Relação entre Class e Student
Class.hasMany(Student, {
  foreignKey: "class_id",
  as: "students", // Uma turma pode ter vários estudantes
});
Student.belongsTo(Class, {
  foreignKey: "class_id",
  as: "class", // Um estudante pertence a uma única turma
});

// Relação entre Lesson e Teacher
Lesson.belongsTo(Teacher, {
  foreignKey: "teacher_id",
  as: "teacher", // Uma aividade é criada por um professor
});
Teacher.hasMany(Lesson, {
  foreignKey: "teacher_id",
  as: "lessons", // Um professor pode criar várias aividades
});

// Relação entre Lesson e Discipline
Lesson.belongsTo(Discipline, {
  foreignKey: "discipline_id",
  as: "discipline", // Uma aividade está associada a uma disciplina
});
Discipline.hasMany(Lesson, {
  foreignKey: "discipline_id",
  as: "lessons", // Uma disciplina pode ter várias aividades
});

// Relação entre Exam e Lesson
Exam.belongsTo(Lesson, {
  foreignKey: "lesson_id",
  as: "lesson", // Uma prova está associada a uma aividade
});
Lesson.hasMany(Exam, {
  foreignKey: "lesson_id",
  as: "exams", // Uma aividade pode ter várias provas
});

module.exports = {
  User,
  Address,
  Student,
  Family,
  Status,
  Discipline,
  Team,
  Ranking,
  Teacher,
  Class,
  Lesson,
  Exam
};