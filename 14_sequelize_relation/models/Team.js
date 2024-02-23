const TeamModel = (Sequelize, DataTypes) => {
  const Team = Sequelize.define(
    "Team",
    {
      // 컬럼 정의
      // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
      team_id: {
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
    },
    {
      //   tableName: "Team",
      freezeTableName: true,
      //   timestamps: false,
    }
  );
};

module.exports = Team;
