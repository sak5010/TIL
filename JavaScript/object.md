# Javascript Object

## Array Object

<br>

### .find()

```js
function findAvocado(currentFruit) {
  return currentFruit === "π₯";
}
const fruits = ["π", "π", "π", "π₯"];
const avocado = fruits.find(findAvocado);
```

.findμ μΈμλ μ½λ°±ν¨μλ₯Ό λ£κ³  μ½λ°±ν¨μμμ λ°°μ΄μ κ° νλ νλλ₯Ό λλ©΄μ ν΄λΉνλ κ°μ μ°ΎμΌλ©΄ κ·Έ κ°μ returnνκ³  μ°Ύμ§ λͺ»νλ©΄ undefinedλ₯Ό λ°ν

<br><br>

### .map()

```js
function double(currentNumber) {
  return currentNumber * 2;
}
const source = [2, 4, 6, 8, 10];
const transformed = source.map(double);
```

μμ νλ νλμ μ½λ°±ν¨μ λ΄μ λͺλ Ήμ μ μ©νκ³  return νλ©΄ κ°κ°μ μμμ κ³μ°μ΄ μ μ©λ μλ‘μ΄ λ°°μ΄λ‘ λ°νν¨. source λ°°μ΄μ λ³νμν€μ§ μμ.

<br><br>

### Arrow Function

```js
const source = [2, 4, 6, 8, 10];
const transformed = source.map((currentNumber) => currentNumber * 2);

const fruits = ["π", "π", "π", "π₯"];
const avocado = fruits.find((currentFruit) => currentFruit === "π₯");
```

νμ΄ν λ€μ μλκ±Έ implicit return νλ€.

<br><br>

### .filter()

```js
const foods = ["π", "π", "π½", "π", "π₯"];
const fruits = foods.filter((currentFood) => currentFood !== "π½");
```

μ½λ°±ν¨μ λ΄μμ trueλ₯Ό λ°ννλ©΄ μ λ°°μ΄λ‘ μ΄λνκ³  falseλ₯Ό λ°ννλ©΄ μ λ°°μ΄μμ λ°°μ λλ€.

<br>

etc... `.sort()`, `.reverse()`, `.reduce()`, `.flat()`, ...

<br><br>

## String Object

<br>

### string.charAt(pos) vs string[pos]

κ²°λ‘ μ μΌλ‘, `.charAt(pos)`λ₯Ό μ¬μ©νλκ²μ΄ κΆμ₯λλ€. κ·Έ μ΄μ λ λ€μκ³Ό κ°λ€.

- bracket λ°©μμ arrayλ objectμλ μ°μ΄κΈ° λλ¬Έμ κ΅¬λΆνλλ° κ°λμ±μ΄ λ¨μ΄μ§λ€.
- λ λ°©μ λͺ¨λ stringμ μΌλΆλΆμ λ³κ²½ν  μ μλλ°, `.charAt(pos)`λ syntax errorλ₯Ό λ°μμν€λλ° `string[pos]`λ μλ¬λ₯Ό λ°μμν€μ§ μμ νΌλμ μΌκΈ°νλ€.
- λ²μλ₯Ό λ²μ΄λμ μ κ·Όνλ©΄ `.charAt(pos)`λ λΉ λ¬Έμμ΄ `''`μ λ°ννκ³ , `string[pos]`λ `undefined`λ₯Ό λ°ννλ€.
