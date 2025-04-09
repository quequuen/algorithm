function solution(s1, s2) {
  var count = 0;
  for (v of s1) {
    for (v2 of s2) {
      if (v === v2) {
        count++;
      }
    }
  }
  return count;
}