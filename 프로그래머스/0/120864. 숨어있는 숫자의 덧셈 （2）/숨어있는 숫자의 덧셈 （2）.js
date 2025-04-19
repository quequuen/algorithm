function solution(my_string) {
  let arr = [...my_string]
    .map((v) => +v)
    .join("")
    .split(NaN)
    .map((v) => (v === "" ? 0 : v))
    .reduce((acc, cur) => parseInt(acc) + parseInt(cur));
  return parseInt(arr);
}