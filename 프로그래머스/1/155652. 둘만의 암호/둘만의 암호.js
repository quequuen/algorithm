function solution(s, skip, index) {
    let skip_asc = skip.split("").map((v) => v.charCodeAt(0));
    
    let answer = [];
    
    for (let v of s) {
        let asc = v.charCodeAt(0);
        
        let newAsc = asc;
        
        for (let i = 0; i < index; i++) {
            newAsc++;
            
            if (newAsc > 122) {
                newAsc = 97;
            }
            
            while (skip_asc.includes(newAsc)) {
                newAsc++;
                if (newAsc > 122) {
                    newAsc = 97;
                }
            }
        }
        
        answer.push(String.fromCharCode(newAsc));
    }

    return answer.join("");
}
