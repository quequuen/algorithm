function solution(A, B) {
    for (let i = 0; i < B.length; i++){
       if(B===A) return i;
        B = B.slice(1)+B[0];
    }
    return -1;
}