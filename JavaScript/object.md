# Javascript Object

## Array Object

<br>

### .find()

```js
function findAvocado(currentFruit) {
  return currentFruit === "🥑";
}
const fruits = ["🍎", "🍌", "🍉", "🥑"];
const avocado = fruits.find(findAvocado);
```

.find의 인자는 콜백함수를 넣고 콜백함수에서 배열의 값 하나 하나를 돌면서 해당하는 값을 찾으면 그 값을 return하고 찾지 못하면 undefined를 반환

<br><br>

### .map()

```js
function double(currentNumber) {
  return currentNumber * 2;
}
const source = [2, 4, 6, 8, 10];
const transformed = source.map(double);
```

요소 하나 하나에 콜백함수 내의 명령을 적용하고 return 하면 각각의 요소에 계산이 적용된 새로운 배열로 반환함. source 배열을 변형시키지 않음.

<br><br>

### Arrow Function

```js
const source = [2, 4, 6, 8, 10];
const transformed = source.map((currentNumber) => currentNumber * 2);

const fruits = ["🍎", "🍌", "🍉", "🥑"];
const avocado = fruits.find((currentFruit) => currentFruit === "🥑");
```

화살표 뒤에 있는걸 implicit return 한다.

<br><br>

### .filter()

```js
const foods = ["🍎", "🍌", "🌽", "🍉", "🥑"];
const fruits = foods.filter((currentFood) => currentFood !== "🌽");
```

콜백함수 내에서 true를 반환하면 새 배열로 이동하고 false를 반환하면 새 배열에서 배제된다.

<br>

etc... `.sort()`, `.reverse()`, `.reduce()`, `.flat()`, ...

<br><br>

## String Object

<br>

### string.charAt(pos) vs string[pos]

결론적으로, `.charAt(pos)`를 사용하는것이 권장된다. 그 이유는 다음과 같다.

- bracket 방식은 array나 object에도 쓰이기 때문에 구분하는데 가독성이 떨어진다.
- 두 방식 모두 string의 일부분을 변경할 수 없는데, `.charAt(pos)`는 syntax error를 발생시키는데 `string[pos]`는 에러를 발생시키지 않아 혼란을 야기한다.
- 범위를 벗어나서 접근하면 `.charAt(pos)`는 빈 문자열 `''`을 반환하고, `string[pos]`는 `undefined`를 반환한다.
