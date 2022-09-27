# ES Modules

## Named Export

```js
export const plus = (a, b) => a + b;
export const minus = (a, b) => a - b;
export const devide = (a, b) => a / b;
```

```js
import { plus, minus, devide } from "../js/math.js";
```

import 된 함수 이름은 export된 이름과 반드시 같아야 한다.

```js
import { plus as add } from "../js/math.js";
```

`as` 키워드를 사용해 이름을 바꿔 import 할 수 있음.

<br><br>

## Default export

각 파일마다 단 한개의 default export만 존재

```js
const plus = (a, b) => a + b;
const minus = (a, b) => a - b;
const devide = (a, b) => a / b;

export default { plus, minus, devide };
```

```js
import math from "../js/math.js";

math.plus(2, 5);
```

다른 이름으로 import 가능. <br>
파일 하나에서 함수 하나만 export 하고싶을때도 사용함.

<br><br>

### Named export와 Default export 섞어 사용

```js
const connectToDB = () => {};
export const getUrl = () => {};
export default connectToDB;
```

```js
import connect, { getUrl } from "./db";
```

<br><br>

## star(\*) import

모든 exported된 내용을 import 하고 싶을때 사용 (단, default export가 없을 때)

```js
import * as myMath from "../js/math.js";
myMath.plus(2, 5);
```

<br><br>

## Dynamic import

```js
async function doMath() {
  const math = await import("../js/math.js");
  math.plus(2, 5);
}
btn.addEventListener("click", doMath);
```
