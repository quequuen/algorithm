function solution(order) {
  let count = 0;
  var str_order = order.toString();
  var arr = str_order.split("");
  var arr2 = ["3", "6", "9"];

  for (let i = 0; i < arr.length; i++) {
    if (arr2.includes(arr[i])) {
      count++;
    }
  }
  console.log(count);
  return count;
}
