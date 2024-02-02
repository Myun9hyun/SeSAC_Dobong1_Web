// 모듈 만들기 (commonJS방식)
// exports라는 키워드 사용해서 내보내기
// 한번에 내보내기

const colors = ["#fff", "#asd", "#qwe"];

const sayHi = () => {
  console.log("hi");
};

function sayName(name) {
  console.log("my name is", name);
  sayHi();
}
// sayName("맹현");
module.exports = {
  colors,
  sayName,
};
