function solution(num, k) {
  var arr = num + "";
  var strK = k + "";
  arr = [...arr];
  let result = 0;
  if (arr.indexOf(strK) > -1) {
    result = arr.indexOf(strK) + 1;
  } else {
    result = -1;
  }
  return result;
}