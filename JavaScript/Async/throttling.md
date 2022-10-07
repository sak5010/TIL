# Throttling

아래 코드는 타이핑 도중에는 0.5초마다 숫자가 1 증가, 타이핑을 멈추면 숫자가 증가하지 않음

```js
const inputName = document.querySelector("#inputName");
const score = document.querySelector("#score");

let timer;
let cnt = 0;
inputName.addEventListener("input", (e) => {
  if (!timer) {
    timer = setTimeout(() => {
      timer = null;
      score.innerText = ++cnt;
    }, 500);
  }
});
```
