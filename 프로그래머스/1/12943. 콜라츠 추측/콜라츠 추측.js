function solution(num) {
    let count = 0;
    while(count <= 500 && num > 1){
        num = num%2===0? num/2: num*3+1;
        
        count++;
    }
    return count >=500? -1: count;
}