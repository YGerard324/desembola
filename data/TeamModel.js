module.exports = (sequelize, DataTypes) => {
    const Team = sequelize.define(
      "team",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        name: {
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
    return Team;
  };
  