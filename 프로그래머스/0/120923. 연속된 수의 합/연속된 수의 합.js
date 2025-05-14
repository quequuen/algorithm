function solution(num, total) {
    const mid = Math.floor(total/num);
    const answer = Array.from({length:num},(_,i)=>(i+mid-Math.floor(num/2)));
    return answer.length%2===0?answer.map((v)=>v+1):answer;
}