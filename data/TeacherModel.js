module.exports = (sequelize, DataTypes) => {
    const Teacher = sequelize.define(
      "teatcher",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        class_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return Teacher;
  };
  