function solution(babbling) {
  const baby = /aya|ye|woo|ma/g;
  let answer = 0;

  for (let word of babbling) {
    const removed = word.replace(baby, "");
    if (removed === "") {
      answer++;
    }
  }

  return answer;
}