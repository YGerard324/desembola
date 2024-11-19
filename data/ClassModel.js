module.exports = (sequelize, DataTypes) => {
    const Class = sequelize.define(
      "class",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        teacher_id: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        student_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return Class;
  };
  