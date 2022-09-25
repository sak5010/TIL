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

<br><br>

etc... `.sort()`, `.reverse()`, `.reduce()`, `.flat()`, ...
