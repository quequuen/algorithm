function solution(s) {
  var arr = [...s];
  var onlyOne_arr = [];
  for (const word of s) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (word == arr[i]) {
        count++;
        arr.splice(i, 1);
      }
      arr = [...s];
    }
    if (count === 1) {
      onlyOne_arr.push(word);
    }
  }
  return onlyOne_arr.sort().join("");
}