const GameModel = (Sequelize, DataTypes) => {
  const Game = Sequelize.define(
    "Game",
    {
      // 컬럼 정의
      // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
      game_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // userid VARCHAR(20) NOT NULL
      date: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      // name VARCHAR(20) NOT NULL
      location: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      //   tableName: "Game",
      freezeTableName: true,
      //   timestamps: false,
    }
  );
};

module.exports = Game;
