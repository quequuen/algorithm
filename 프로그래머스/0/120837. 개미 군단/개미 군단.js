function solution(hp) {
   let a = 5, b = 3, c = 1;
    let result_a = 0, result_b = 0;
    
    result_a = Math.floor(hp/a);
    result_b = Math.floor((hp%a)/b);
    
    return result_a+result_b+(hp%a)%b;
}