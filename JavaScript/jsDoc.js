// JS Doc 주석 달기
/**
 *
 * @version 1.0.0
 * @see https://naver.com
 * @todo 내일까지 링크 수정하고 버전 업데이트
 * @param {string} name 사람이름
 * @param {number} age 나이
 * @returns 두개 합쳐서 string으로 반환
 */
function hello(name, age) {
  return name + age;
}
hello("kim", 20);

/**
 * @readonly
 * @const {number}
 */
const num = 1;

/**
 * @deprecated 이 함수 말고 hello함수 쓰세요
 */
function hello2(name, age) {
  return name + name + age;
}
hello2("hello", 20);

/** @type {string | number} */
let name = "sang";

/** @type {number[]} */
let numArr = [1, 2, 3];

// 출처: 코딩애플(https://www.youtube.com/watch?v=ORmnc-hLrYs)
