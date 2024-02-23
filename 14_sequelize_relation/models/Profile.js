const ProfileModel = (Sequelize, DataTypes) => {
  const profile = Sequelize.define(
    "Proflie",
    {
      // 컬럼 정의
      // id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
      profile_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      // userid VARCHAR(20) NOT NULL
      player_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      // name VARCHAR(20) NOT NULL
      position: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
      // pw VARCHAR(20) NOT NULL
      salary: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      //   tableName: "Profile",
      freezeTableName: true,
      //   timestamps: false,
    }
  );
};

module.exports = Profile;
