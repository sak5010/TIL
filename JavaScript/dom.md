# DOM (Document Object Model)

## HTML Collection vs NodeList

- `document.getElementsByTagName()`은 **HTMLCollection**을 반환하고 이는 `forEach()`나 `map()`이 내장되어 있지 않다.
- **for loop** 은 사용 가능
- `document.querySelectorAll()`은 **Node List**를 반환하고 `forEach()`는 내장되어 있지만 `map()`은 내장되어 있지 않다.
  <br>

### 해결방법

HTMLCollection과 Node List를 **spread syntax**를 통해 Array로 만들어주면 된다.

```js
let spreadArray = [...x];
```

이로 인해 Array 내장함수인 forEach()와 map()을 사용할 수 있다.

<br>

| 출처: [javascript.plainenglish - Dave Gray](https://javascript.plainenglish.io/start-using-foreach-and-map-with-dom-selections-754616f8e7a7)

<br><br>

## innerText vs innerHTML vs textContent

- innerText는 text element를 조작한다.
- innerHTML은 html element를 조작한다.

아래는 innerText와 innerHTML의 비교다.

```js
element.innerText = "<div style='color:red'>A</div>"; // 문자열 그대로 text로 들어감
element.innerHTML = "<div style='color:red'>A</div>"; // 태그를 파싱하여 빨간색 A가 들어감
```

- innerHTML은 **HTML 전체** 내용을 가져온다.
- innerText는 사용자에게 **보여지는** 텍스트 값을 가져온다. 이때, 연속되는 공백값은 무시하고 하나의 공백만 처리한다.
- 태그와 상관없이 해당 노드가 가지고 있는 텍스트 값을 그대로 가져온다. 따라서 `display:none`이 적용된 숨겨진 텍스트도 가져온다.

<br>

| 출처: [어제 오늘 내일:티스토리](https://hianna.tistory.com/480)
