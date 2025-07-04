function solution(s) {
    let answer = 0;
    let same = 0, diff = 0;
    let x = s[0];  
    for (let i = 0; i < s.length; i++) {
        if (same === 0) {
            x = s[i];  
        }
        
        if (s[i] === x) same++;
        else diff++;

        if (same === diff) {
            answer++;
            same = 0;
            diff = 0;
        }
    }

    if (same !== 0 || diff !== 0) answer++;

    return answer;
}
