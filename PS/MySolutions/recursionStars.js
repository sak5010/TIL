const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let n;

/**
 * 이전 별 템플릿 array를 받아서 바깥쪽에 별을 만들어서 새로운 array로 리턴해주는 함수.
 * @param {array} template
 * @param {number} n
 * @param {number} l
 * @returns 최종 * 템플릿을 만들어 반환
 */
const makeOuterStars = (template, n, l) => {
  if (n === 1) return template;

  const len = l; // 가로, 세로 길이 (같음)

  // 아래 기존 별 템플릿에 바깥쪽 테두리에 별을 덧씌우는 과정
  template.unshift("*" + " ".repeat(len - 2) + "*"); // 2 line
  template.unshift("*".repeat(len)); // 1 line
  // 3~ last-2 line
  for (let i = 2; i < len - 2; i++) {
    template[i] = "* " + template[i] + " *";
  }
  // last 2 lines
  template.push("*" + " ".repeat(len - 2) + "*");
  template.push("*".repeat(len));

  // 별 덧씌우고 재귀. n은 1씩 감소해서 탈출로 가까워지고 l은 4를 더해 길이를 더해줌.
  return makeOuterStars(template, n - 1, l + 4);
};

rl.on("line", function (x) {
  n = parseInt(x);
  rl.close();
}).on("close", function () {
  result = ["*"];
  result = makeOuterStars(result, n, 5); // l에 5를 넣은 이유는 2단계부터 시작하라고. 1단계는 바로 리턴되니까.
  result.forEach((val) => console.log(val));

  process.exit();
});
