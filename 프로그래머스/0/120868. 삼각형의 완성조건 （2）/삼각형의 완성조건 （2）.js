function solution(sides) {
  let max = Math.max(...sides);
  let x = [];
  for (let i = max + 1 - Math.min(...sides); i <= max; i++) {
    if (max < i + Math.min(...sides)) {
      x.push(i);
    }
  }
  max = sides[0] + sides[1];

  for (let i = Math.max(...sides); i < max; i++) {
    if (max < i + Math.min(...sides)) {
      x.push(i);
    }
  }
  x = new Set(x);

  return x.size;
}