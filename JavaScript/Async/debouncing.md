# Debouncing

### 디바운싱 예제

아래 코드는 일정 시간 동안 입력이 일어나지 않으면 알림창을 띄움 <br>
응용해서 ajax요청을 보내서 검색결과를 실시간으로 받아오는 등 처리 가능

```js
let timer;
document.querySelector("#inputName").addEventListener("input", (e) => {
  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    alert(`입력된 이름: ${e.target.value}`);
  }, 1000);
});
```
