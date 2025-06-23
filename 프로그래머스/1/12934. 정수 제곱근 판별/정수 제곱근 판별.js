function solution(n) {
    let half = Math.floor(n);
    let answer = 0;
    for(let i =1;i<=half;i++){
        if(i**2===n){
            answer = i;
            break;
        }
        else{
           answer = -1;
        };
        
    }
    
    return answer===-1?answer:(++answer)**2;
}