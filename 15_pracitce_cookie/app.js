const express = require("express");
const app = express();
const PORT = 8080;
const cookieParser = require("cookie-parser");

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const cookieConfig = {
  maxAge: 60 * 1000,
  httpOnly: true,
};

// TODO: cookie parser 미들웨어 등록
app.use(cookieParser());

app.get("/", (req, res) => {
  // TODO : index.ejs 두번쨰 인자로 Popup key에 쿠키 값 보내기
  res.render("index", { popup: req.cookies.popup });
  //   res.render("index");
});

app.post("/setCookie", (req, res) => {
  //TODO : 쿠키 생성
  // 쿠키 이름 : 'popup', 쿠키 값 : 'hide'
  res.cookie("popup", "hide", cookieConfig);
  res.send("쿠키 보내기");
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

/* 
req 객체
    - req.cookies: 쿠키 정보 담겨있음
    - req.signedCookies : 암호화된 쿠키정보 담겨있음
*/
/* 
res 객체
    - req.cookie(키, 값, 옵션): 쿠키 설정
    - req.clearCookie(키, 값, 옵션): 쿠키 제거
*/
