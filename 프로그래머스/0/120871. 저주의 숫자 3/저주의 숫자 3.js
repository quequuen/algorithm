function solution(n) {
  let arr = Array.from({ length: n }, () => 0);

  function isValid(num) {
    return num % 3 !== 0 && !num.toString().includes("3");
  }

  function getNextValid(prev) {
    let next = prev + 1;
    while (!isValid(next)) {
      next++;
    }
    return next;
  }

  arr[0] = 1;
  for (let i = 1; i < n; i++) {
    arr[i] = getNextValid(arr[i - 1]);
  }

  return arr[n - 1];
}