function solution(t, p) {
  let answer = 0;
  const len = p.length;

  for (let i = 0; i <= t.length - len; i++) {
    const slice = t.slice(i, i + len); 
    if (Number(slice) <= Number(p)) {
      answer++;
    }
  }

  return answer;
}
