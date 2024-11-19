module.exports = (sequelize, DataTypes) => {
    const Student = sequelize.define(
      "student",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        neurodivergent: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        family_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        team_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        status_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        class_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return Student;
  };
  