module.exports = (sequelize, DataTypes) => {
    const Discipline = sequelize.define(
      "discipline",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        lessons_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return Discipline;
  };
  