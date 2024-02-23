// exports.getVisitors = () => {
//   return [
//     { id: 1, name: "홍길동", comment: "내가왔다" },
//     { id: 2, name: "이찬혁", comment: "으라차차" },
//   ];
// };

const mysql = require("mysql");
// mysql 연결 설정
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "sesac",
  password: "1234",
  database: "sesac",
});

// 전체 데이터 조회
// GET /visitor
exports.getVisitors = (cb) => {
  conn.query("SELECT * FROM visitors", (err, rows) => {
    if (err) throw err;

    console.log("Visitor.js 전체목록 :: ", rows);
    cb(rows);
  });
};

// 데이터 등록
// POST /visitor
exports.postVisitor = (data, cb) => {
  data = { name: "진형", comment: "발렌타인데이로군용" };
  conn.query(
    `INSERT INTO visitor VALUE(null, ${data.name},${data.comment})`,
    (err, rows) => {
      if (err) throw err;
      console.log(rows);

      cb(rows.insertId);
    }
  );
};

exports.deleteVisitor = (id, cb) => {
  console.log(id);
  conn.query(`DELETE FROM visitor WHERE id=${id}`, (err, rows) => {
    if (err) throw err;
    console.log("Visitor.js delete", rows);
    cb(rows);
  });
};
