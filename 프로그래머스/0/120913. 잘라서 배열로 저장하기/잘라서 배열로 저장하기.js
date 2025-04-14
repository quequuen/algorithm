function solution(my_str, n) {
  var answer = [];
  for (let i = 0, j = 0; i <= parseInt(my_str.length / n); i++, j += n) {
    answer.push([...my_str].splice(j, n).join(""));
  }
  return answer.filter((v) => v !== "");
}