function solution(i, j, k) {
    let arr = Array.from({length: j-(i-1)},(_,idx)=>i+idx).join("");
    
    return [...arr].filter((v)=>Number(v)===k).length;
}