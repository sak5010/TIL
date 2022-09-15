### \b와 \B 구분자. <br>

`\b`는 word boundary이고 `\B`는 not word boundary이다. <br>
`/\bo./g`: Raindrops **on** roses, and whiskers **on** kittens. <br>
`/\Bo./g`: Raindr**op**s on r**os**es, and whiskers on kittens.

<br><br>

### 시작문자 ^와 없거나 아무문자 .\*

`/^[A-Z].*Cat.*/`<br>
대문자로 시작하고 Cat을 포함하는 줄 찾기. <br>
.\*을 중간에 사용하여 아무 문자가 있거나 없거나를 표현.
