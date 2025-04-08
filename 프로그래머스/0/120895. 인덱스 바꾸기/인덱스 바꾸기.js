function solution(my_string, num1, num2) {
  var origin_arr = [...my_string];
  var arr = [...my_string];
  arr[num1] = origin_arr[num2];
  arr[num2] = origin_arr[num1];
  return arr.join("");
}