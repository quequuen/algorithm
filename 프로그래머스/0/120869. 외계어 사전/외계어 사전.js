function solution(spell, dic) {
  for (let v of dic) {
    let answer = 0;
    let count = {};
    for (let El of v) {
      count[El] = (count[El] || 0) + 1;
    }

    for (let al of spell) {
      if (count[al] === 1) {
        answer++;
      }
      if (answer % spell.length === 0 && answer !== 0) {
        return 1;
      }
    }
  }
  return 2;
}
