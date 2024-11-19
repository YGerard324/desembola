module.exports = (sequelize, DataTypes) => {
    const Exam = sequelize.define(
      "exam",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        application_date: {
          type: DataTypes.DATEONLY,
          allowNull: false
        },
        lesson_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        student_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return Exam;
  };
  