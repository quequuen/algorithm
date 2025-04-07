function solution(my_string) {
    return [...my_string].map((v) => {
    if (v.toUpperCase() === v) {
      return v.toLowerCase();
    } else {
      return v.toUpperCase();
    }
  }).join('');
}