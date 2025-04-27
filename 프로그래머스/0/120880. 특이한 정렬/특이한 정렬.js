function solution(numlist, n) {
    let arr = numlist.sort((a,b)=>{
    let a_abs = Math.abs(n-a);
    let b_abs = Math.abs(n-b);
        if(a_abs===b_abs){
            return b-a;
        }
        return a_abs-b_abs;
        
    });
    
    return arr;
}