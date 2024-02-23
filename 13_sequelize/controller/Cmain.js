// const models = require("../models");
// models={Player, Profile, ..., sequelize, Sequelize}
const { Player, Profile } = require("../models");
exports.main = (req, res) => {
  res.render("index");
};

// GET /players
// 전체 선수 목록 가지고오기
exports.getAllPlayer = async (req, res) => {
  try {
    const players = await Player.findAll();
    console.log(players);
    res.send(players);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};

// GET /players/:playerId
// 선수 한 명 조회 (Player, Profile)
exports.getPlayer = async (req, res) => {
  try {
    console.log(req.params); //{playerId:1}
    const { playerId } = req.params;
    const player = await Player.findOne({
      where: {
        player_id: playerId,
      },
      include: [{ model: Profile, attributes: ["position", "salary"] }],
      // include: 두 테이블을 합쳐서 보여줌(inner join)
    });

    res.json(player);
  } catch (err) {
    console.log("err", err);
    res.status(500).send("server error");
  }
};
