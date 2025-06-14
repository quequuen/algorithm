function solution(n, m) {
    function gcd(a, b) {
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    let max = gcd(n, m);  
    let min = lcm(n, m);  

    return [max, min];
}
