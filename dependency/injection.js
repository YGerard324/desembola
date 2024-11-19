// User
const UserRepository = require("../repository/UserRepository");
const UserApplication = require("../application/UserApplication");
const UserFacade = require("../facade/UserFacade");

const userRepository = new UserRepository();
const userApplication = new UserApplication(userRepository);
const userFacade = new UserFacade(userApplication);
// User

// Address
const AddressRepository = require("../repository/AddressRepository");
const AddressApplication = require("../application/AddressApplication");
const AddressFacade = require("../facade/AddressFacade");

const addressRepository = new AddressRepository();
const addressApplication = new AddressApplication(addressRepository);
const addressFacade = new AddressFacade(addressApplication);
// Address

// Student
const StudentRepository = require("../repository/StudentRepository");
const StudentApplication = require("../application/StudentApplication");
const StudentFacade = require("../facade/StudentFacade");

const studentRepository = new StudentRepository();
const studentApplication = new StudentApplication(studentRepository);
const studentFacade = new StudentFacade(studentApplication);
// Student

// Family
const FamilyRepository = require("../repository/FamilyRepository");
const FamilyApplication = require("../application/FamilyApplication");
const FamilyFacade = require("../facade/FamilyFacade");

const familyRepository = new FamilyRepository();
const familyApplication = new FamilyApplication(familyRepository);
const familyFacade = new FamilyFacade(familyApplication);
// Family

// Teacher
const TeacherRepository = require("../repository/TeacherRepository");
const TeacherApplication = require("../application/TeacherApplication");
const TeacherFacade = require("../facade/TeacherFacade");

const teacherRepository = new TeacherRepository();
const teacherApplication = new TeacherApplication(teacherRepository);
const teacherFacade = new TeacherFacade(teacherApplication);
// Teacher

// Class
const ClassRepository = require("../repository/ClassRepository");
const ClassApplication = require("../application/ClassApplication");
const ClassFacade = require("../facade/ClassFacade");

const classRepository = new ClassRepository();
const classApplication = new ClassApplication(classRepository);
const classFacade = new ClassFacade(classApplication);
// Class

// Lesson
const LessonRepository = require("../repository/LessonRepository");
const LessonApplication = require("../application/LessonApplication");
const LessonFacade = require("../facade/LessonFacade");

const lessonRepository = new LessonRepository();
const lessonApplication = new LessonApplication(lessonRepository);
const lessonFacade = new LessonFacade(lessonApplication);
// Lesson

// Exam
const ExamRepository = require("../repository/ExamRepository");
const ExamApplication = require("../application/ExamApplication");
const ExamFacade = require("../facade/ExamFacade");

const examRepository = new ExamRepository();
const examApplication = new ExamApplication(examRepository);
const examFacade = new ExamFacade(examApplication);
// Exam

// Discipline
const DisciplineRepository = require("../repository/DisciplineRepository");
const DisciplineApplication = require("../application/DisciplineApplication");
const DisciplineFacade = require("../facade/DisciplineFacade");

const disciplineRepository = new DisciplineRepository();
const disciplineApplication = new DisciplineApplication(disciplineRepository);
const disciplineFacade = new DisciplineFacade(disciplineApplication);
// Discipline

// Ranking
const RankingRepository = require("../repository/RankingRepository");
const RankingApplication = require("../application/RankingApplication");
const RankingFacade = require("../facade/RankingFacade");

const rankingRepository = new RankingRepository();
const rankingApplication = new RankingApplication(rankingRepository);
const rankingFacade = new RankingFacade(rankingApplication);
// Ranking

// Status
const StatusRepository = require("../repository/StatusRepository");
const StatusApplication = require("../application/StatusApplication");
const StatusFacade = require("../facade/StatusFacade");

const statusRepository = new StatusRepository();
const statusApplication = new StatusApplication(statusRepository);
const statusFacade = new StatusFacade(statusApplication);
// Status

// Team
const TeamRepository = require("../repository/TeamRepository");
const TeamApplication = require("../application/TeamApplication");
const TeamFacade = require("../facade/TeamFacade");

const teamRepository = new TeamRepository();
const teamApplication = new TeamApplication(teamRepository);
const teamFacade = new TeamFacade(teamApplication);
// Team

module.exports = {
  userFacade,
  addressFacade,
  studentFacade,
  familyFacade,
  teacherFacade,
  classFacade,
  lessonFacade,
  examFacade,
  disciplineFacade,
  rankingFacade,
  statusFacade,
  teamFacade,
};