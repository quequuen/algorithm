function solution(score) {
    let score_abs = [...score].map(([a,b])=>(a+b)/2);
    
    let answer = score_abs.map((v)=>{
       let high = score_abs.filter((abs)=>abs>v);
        return high.length+1;
    });
    
    return answer;
}