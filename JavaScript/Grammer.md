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
