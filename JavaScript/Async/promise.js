"use strict";

// Promise is a JavaScript obejct for asynchronous operation.
// State: pending -> fulfilled or rejected
// Producer vs Consumer 관점.

// 1. Producer
// when new Promise is created, the executor runs automatically.
// Promise의 콜백함수가 executor임. 생성되자마자 실행 됨. (주의)
const promise = new Promise((resolve, reject) => {
  // doing some heavy work (network, read files)
  console.log("doing something...");
  setTimeout(() => {
    resolve("sang"); // 성공적으로 얻은 데이터를 담아 프로미스로 반환.
    // reject(new Error("no network")); // 에러가 발생하면 아래 catch에서 처리.
  }, 1000);
});

// 2. Consumers: then, catch, finally
// 위에 최종적으로 resolve 콜백함수를 통해서 전달한 값이 value로 전달됨.
promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("finally");
  });

// 3. Promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  .then((num) => console.log(num));

// 4. Error Handling
const getHen = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("🐔"), 1000);
  });
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error(`error! ${hen} => 🥚`)), 1000);
  });
const cook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch((error) => {
    return "🌭";
  })
  .then(cook)
  .then(console.log);
