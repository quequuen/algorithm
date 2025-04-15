function solution(dots) {
  var sum_arr = [...dots].map(([a, b]) => parseInt([a + b]));
  var max = dots[sum_arr.indexOf(Math.max(...sum_arr))];
  var arr = [...dots].filter(([a, b]) => !(a === max[0] && b === max[1]));
  let x,
    y = 0;
  for (v of arr) {
    if (v[0] === max[0]) {
      y = Math.abs(max[1] - v[1]);
    }
    if (v[1] === max[1]) {
      x = Math.abs(max[0] - v[0]);
    }
  }
  return x * y;
}