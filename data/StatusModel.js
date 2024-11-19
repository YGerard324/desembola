module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define(
      "status",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        discipline_id: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        progress: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        description: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return Status;
  };
  