function solution(n) {
    let answer = 0;
    let i = 1;
    while(i<=n){
        if(i**2===n){
            answer = i;
            break;
        }
        else{
            answer = -1;
        }
        i++;
    }
    return answer===-1?answer:(++answer)**2;
}