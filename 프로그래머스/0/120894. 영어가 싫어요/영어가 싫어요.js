function solution(numbers) {
  const convert = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  var answer = []; 


  for (const key of Object.keys(convert)) {
    let num = numbers.indexOf(key);
    if (numbers.includes(key)) {
    while (num !== -1) {
      answer.push({ index: num, value: convert[key] });
      num = numbers.indexOf(key, num + 1); 
    }
        
    }
  }
  answer.sort((a, b) => a.index - b.index);

  return parseInt(answer.map((v) => v.value).join(""));
}
