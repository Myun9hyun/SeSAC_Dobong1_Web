const Visitor = require("../model/Visitor");

exports.main = (req, res) => {
  res.render("index");
};

exports.getVisitors = (req, res) => {
  //[DB연결 전, 임시 데이터]
  //   console.log(Visitor.gerVisitors());
  //   res.render("visitor", { data: Visitor.getVisitors() });
  //   [DB 연결 후]
  Visitor.getVisitors((result) => {
    console.log("CVisitor.js 전체목록 ::", result);
    res.render("visitor", { data: result });
  });
};

exports.postVisitor = (req, res) => {
  console.log(req.body); //{id, name, comment}
  Visitor.postVisitor(req.body, (result) => {
    console.log("Cvisitor.js post", result);
    res.send({ id: result, name: req.body.name, comment: req.body.comment });
  });
};

exports.deleteVisitor = (req, res) => {
  console.log(req.body);
  console.log(req.body, id);
  Visitor.deleteVisitor(req.body.id, () => {
    console.log("Cvisitor.js delete", result);
    res.send("몇 번 방명록 삭제 완료!");
  });
};
