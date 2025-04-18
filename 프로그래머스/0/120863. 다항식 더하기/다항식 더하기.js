function solution(polynomial) {
  let arr = polynomial.split(" + ");
  let x_sum = 0;
  let sum = 0;
    let answer = "";

  arr = arr.map((v) => (isNaN(+v) ? v : +v));
  for (let i of arr) {
    if (isNaN(i)) {
      let x_number = i.split("x");
      if (x_number[0] !== "") {
        x_sum += +x_number[0];
      } else {
        x_sum += 1;
      }
    } else {
      sum += i;
    }
  }
    
    if (x_sum !== 0) {
    if (x_sum === 1) {
      answer += "x";
    } else {
      answer += x_sum + "x";
    }
  }
  if (x_sum !== 0 && sum !== 0) {
    answer += " + ";
  }
  if (sum !== 0) {
    answer += sum;
  }
  return answer;
}