const TeamGameModel = (Sequelize, DataTypes) => {
  const TeamGame = Sequelize.define(
    "TeamGame",
    {
      // 컬럼 정의
      // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // pw VARCHAR(20) NOT NULL
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      //   tableName: "TeamGame",
      freezeTableName: true,
      //   timestamps: false,
    }
  );
};

module.exports = TeamGame;
