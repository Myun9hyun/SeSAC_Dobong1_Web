// const { sequelize, Sequelize } = require(".");

const PlayerModel = (Sequelize, DataTypes) => {
  const Player = Sequelize.define(
    "Player",
    {
      // 컬럼 정의
      // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // userid VARCHAR(20) NOT NULL
      name: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      // name VARCHAR(20) NOT NULL
      age: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // pw VARCHAR(20) NOT NULL
      team_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      //   tableName: "Player",
      freezeTableName: true,
      //   timestamps: false,
    }
  );
};

module.exports = Player;
