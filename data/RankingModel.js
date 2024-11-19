module.exports = (sequelize, DataTypes) => {
    const Ranking = sequelize.define(
      "ranking",
      {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement: true,
          unique: true,
        },
        position: {
          type: DataTypes.INTEGER,
          allowNull: false
        },
        team_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
      },
      { timestamps: false, freezeTableName: true }
    );
    return Ranking;
  };
  