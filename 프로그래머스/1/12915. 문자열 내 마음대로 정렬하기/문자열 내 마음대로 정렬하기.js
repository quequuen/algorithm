function solution(strings, n) {
  // return strings.sort((a, b) => {
  //   if (a[n] === b[n]) {
  //     return a.localeCompare(b);
  //   } else {
  //     return a[n].localeCompare(b[n]);
  //   }
  // });
    return strings.sort((a,b)=>a[n]===b[n]? a.localeCompare(b): a[n].localeCompare(b[n]));
}