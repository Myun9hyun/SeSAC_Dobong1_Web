let product;
let price;
function goMart() {
  console.log("마트에 가서 무슨 음료를 살까?");
}
setTimeout(() => {
  console.log("setTimeout 사용해보기");
}, 3000);

function goMart() {}

function pickDrink(callback) {
  setTimeout(() => {
    console.log("고민 끝!");
    product = "콜라";
    price = 2000;
    callback();
  }, 3000);
}

function pay(price) {
  console.log(`상품명 : ${product}, 가격:${price}`);
}

goMart();
pickDrink(pay);
// pay();
