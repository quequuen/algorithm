function solution(dartResult) {
  const regex = /(\d{1,2})([SDT])([*#]?)/g;
  const scores = [];
  const bonus = { S: 1, D: 2, T: 3 };
  let match;

  while ((match = regex.exec(dartResult)) !== null) {
    let [_, score, b, option] = match;
    score = Number(score) ** bonus[b];

    if (option === "*") {
      if (scores.length > 0) scores[scores.length - 1] *= 2;
      score *= 2;
    } else if (option === "#") {
      score *= -1;
    }

    scores.push(score);
  }

  return scores.reduce((a, b) => a + b);
}
