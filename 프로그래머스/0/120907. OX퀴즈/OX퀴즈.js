function solution(quiz) {
  var answer = [];
  let n1,
    n2 = 0;
  let str = "";

  let arr = [...quiz];

  for (s of arr) {
    str = s
      .split(" ")
      .map((v) => (v === "-" ? -1 : v === "+" ? 1 : v === "=" ? 0 : Number(v)));
    answer.push(str[0] + str[1] * str[2] === str[4] ? "O" : "X");
  }
  return answer;
}