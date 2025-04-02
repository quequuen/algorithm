function solution(n) {
    let fact = 1; 
    let i = 1;
    
    while(fact<=n){
        i++;
        fact *= i;
    }
    return (fact===n)?i:(i-1);
}