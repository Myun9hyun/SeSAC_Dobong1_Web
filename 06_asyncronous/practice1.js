// function call(name, cb) {
//   setTimeout(function () {
//     console.log(name);
//     cb(name);
//   }, 1000);
// }
function call() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("promise");
      name = "kim";
      resolve("성공");
    }, 1000);
  });
}

function back() {
  setTimeout(function () {
    console.log("back");
    cb("back");
  }, 1000);
}

function hell() {
  setTimeout(function () {
    cb("callback hell");
  }, 1000);
}
// call -> back -> hell 순서로 실행
// call("kim", function (name) {
//   console.log(name + "반가워");
//   back(function (txt) {
//     console.log(txt + "을 실행했구나");
//     hell(function (message) {
//       console.log("여기는 " + message);
//     });
//   });
// });

call()
  .then((name) => {
    back();
  })
  .catch((err) => {
    console.log(err);
  });

// pickDrink()
//   .then(() => {
//     pay();
//   })
//   .catch((err) => {
//     console.log(err);
//   })
//   .finally(() => {
//     console.log("마트에서 나옴");
//   });
