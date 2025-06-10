function solution(k, score) {
    var answer = [];
    var rank =[];
    for(let i=0; i<score.length;i++){
        rank.push(score[i]);
        rank = rank.sort((a,b)=>b-a).slice(0,k);
        answer.push(rank[rank.length-1])
    }
    return answer;
}