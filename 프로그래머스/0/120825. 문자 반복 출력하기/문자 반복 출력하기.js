function solution(my_string, n) {
    var b = [];
    for(let i = 0; i< my_string.length; i++){
        for(let j = 0; j<n; j++){
          b.push(my_string[i]);  
        }
    }
    
    return b.join("");
}