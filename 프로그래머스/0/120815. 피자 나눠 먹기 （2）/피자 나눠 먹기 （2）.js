function solution(n) {
    if(n===1)
        return 1;
    if(n%6===0){ //n이 6의 배수일 때
            return n/6;
        }else{  //n이 6의 배수가 아닐 때
            for(let i=1;i<=n;i++){
                if((6*i)%n===0){
                    return i; 
                }
            }
        }
}
