let product;
let price;
function goMart() {
  console.log("마트에 가서 무슨 음료를 살까?");
}
// setTimeout(() => {
//   console.log("setTimeout 사용해보기");
// }, 3000);

// function goMart() {}

function pickDrink() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("고민 끝!");
      product = "콜라";
      price = 2000;
      resolve("구완");
    }, 3000);
  });
}

function pay(product, price) {
  console.log(`상품명 : ${product}, 가격:${price}`);
}

goMart();
pickDrink()
  .then(() => {
    pay();
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("마트에서 나옴");
  });
