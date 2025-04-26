function solution(a, b) {
    function gcd(a,b){
        if(b===0) return a;
        return gcd(b, a%b);
    }
    
    
    b /= gcd(a,b);
    
    while(b%2===0) b/=2;
    while(b%5===0) b/=5;

    return b===1?1:2;
}