# JavasScript 문법

## 헷갈리는 문법

### String(value) vs value.toString()

만약 value가 null 또는 undefined라면 `value.toString()`은 type error를 반환한다. <br>
`String(value)`는 메세지 그 자체 "null" 또는 "undefined"를 그대로 반환한다. <br>

<br>

### Number() vs parseInt()

```js
// parsing:
parseInt("20px"); // 20
parseInt("10100", 2); // 20

// type conversion
Number("20px"); // NaN
```

문자를 제거하고 숫자만 취하고 싶을때 `parseInt()`를 사용하고 <br>
숫자 데이터만 취하고 그렇지 않으면 예외처리를 할 때 `Number()`를 쓸듯 하다. <br>

<br>

### forEach vs for in vs for of

#### forEach

- Array 객체에서만 사용 가능
- ES6부터 Map, Set 지원
- 배열의 요소들을 반복하여 작업 수행
- 인자로 callback함수 등록 가능. 배열의 각 요소들이 반복될 때 callback함수 호출
- callback함수에서 배열 요소의 인덱스와 값에 접근 가능

```js
let arr = ["a", "b", "c", "d"];

arr.forEach(function (element, index, array) {
  console.log(element, index, array);
});

/*** 출력 결과 ***/
/*
a 0 ['a', 'b', 'c', 'd']
b 1 ['a', 'b', 'c', 'd']
c 2 ['a', 'b', 'c', 'd']
d 3 ['a', 'b', 'c', 'd']
*/
```

<br>

#### for in

- 객체에 사용 가능
- 객체의 key값과 value값을 뽑아내는데 유용

```js
let obj = {
  a: '가';
  b: '나';
  c: '다';
};

for (let key in obj) {
  console.log(key, obj[key]);
}

/*** 출력 결과 ***/
/*
a 가
b 나
c 다
*/
```

<br>

#### for of

- ES6에 추가된 컬렉션 전용 반복 구문
- 컬렉션 객체가 `Symbol.iterator`속성을 가지고 있어야 함. (직접 명시 가능)

```js
let iterable = [10, 20, 30];

for (let value of iterable) {
  console.log(value);
}

/*** 출력 결과 ***/
/*
10
20
30
*/
```

<br>

> 결론적으로 배열의 각 값에 콜백함수를 넣을때는 `forEach` 내장함수를 사용하고, 객체의 키에 접근할때는 `for in`을 사용하며, 바로 value값에 접근할때는 `for of`를 사용한다.
