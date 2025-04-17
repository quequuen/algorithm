function solution(numbers) {
  let max1,max2 = 0;
  let arr = numbers.sort((a,b)=>a-b);
    max1 = arr[arr.length-1] * arr[arr.length-2];
    max2 = arr[0]*arr[1];
    
    return max1>max2?max1:max2;
    
  ;
}