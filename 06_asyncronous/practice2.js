function call(name) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(name);
      resolve(name);
    }, 1000);
  });
}

function back() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log("back");
      resolve("back");
    }, 1000);
  });
}

function hell() {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve("callback hell");
    }, 1000);
  });
}

call("kim")
  .then((name) => {
    console.log(name + "안뇽");
    return back();
  })
  .then((txt) => {
    console.log(txt + "을 실행했구나");
    return hell();
  })
  .then((message) => {
    console.log("여기는 " + message);
  })
  .catch((error) => {
    console.error(error);
  });
