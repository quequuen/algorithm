function solution(s) {
  const str_arr = s.split(" ");
  const stack = [];

  for (let i = 0; i < str_arr.length; i++) {
    if (str_arr[i] === "Z") {
      stack.pop();
    } else {
      stack.push(Number(str_arr[i]));
    }
  }

  return stack.reduce((acc, cur) => acc + cur, 0);
}