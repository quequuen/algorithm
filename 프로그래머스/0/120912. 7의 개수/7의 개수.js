function solution(array) {
  var arr = array.join("");
  return [...arr].filter((v) => parseInt(v) === 7).length;
}