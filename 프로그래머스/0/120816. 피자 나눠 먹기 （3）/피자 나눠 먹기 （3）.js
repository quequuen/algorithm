function solution(slice, n) {
    let i=0;
    if(n%slice!==0){
        i++;
    }
    return Math.floor((n/slice)+i);
    
}