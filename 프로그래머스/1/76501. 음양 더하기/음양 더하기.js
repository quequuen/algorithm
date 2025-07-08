function solution(absolutes, signs) {
    var answer = absolutes.map((v,i)=>{
        return v*(signs[i]?1:-1);
    });
    return answer.reduce((acc,v)=>acc+v);
}