function solution(name, yearning, photo) {
    let score = {};
    for(let i =0;i<name.length;i++){
        score[name[i]] =yearning[i];
    }
    let answer = [];
    photo.forEach((v)=>{
        answer.push(v.reduce((a,c)=>(a+(score[c]||0)),0));
    });
    
    return answer;
    
}