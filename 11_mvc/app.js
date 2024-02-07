const express = require("express");
const app = express();
const PORT = 8000;
const path = require("path");

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const indexRouter = require("./routes/index");
// const indexRouter = require("./routes"); // index.js라면, 폴더 명 뒤의 파일명은 생략 가능
// localhost:8000/ 경로를 기본으로 하는 경로는 indexRouter에서 처리
app.use("/", indexRouter);
// const comments = [
//   {
//     id: 1,
//     userid: "apple",
//     date: "2022-10-31",
//     comment: "안녕하세요~",
//   },
//   {
//     id: 2,
//     userid: "banana",
//     date: "2021-11-21",
//     comment: "바나나는 길어~",
//   },
//   {
//     id: 3,
//     userid: "cocoa",
//     date: "2023-09-31",
//     comment: "코코아는 달아~",
//   },
//   {
//     id: 4,
//     userid: "donut",
//     date: "2024-02-20",
//     comment: "도넛은 둥글어~",
//   },
// ];

app.get("/", function (req, res) {
  res.render("index");
});

app.get("/comments", function (req, res) {
  console.log(comments);
  res.render("comments", { commentInfo: comments });
});
app.get("/comment/:id", function (req, res) {
  console.log(comments);
  const commentId = req.params.id;

  if (commentId < 1 || commentId > comments.length) {
    return res.render("404");
  }
  res.render("comment", { commentInfo: comments[commentId - 1] });
});

app.get("*", function (req, res) {
  res.render("404");
});

app.listen(PORT, () => {
  console.log(`${PORT} is open!!`);
  console.log(`http://localhost:${PORT}`);
});
