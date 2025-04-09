function solution(my_string) {
  var arr = my_string.split(" ");
  arr = arr.map((v) => (v === "+" ? "+" : v === "-" ? "-" : parseInt(v)));
  let plus = 0;
  let minus = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+") {
      plus += arr[i + 1];
    } else if (arr[i] === "-") {
      minus += arr[i + 1];
    }
  }
  return arr[0] + plus - minus;
}