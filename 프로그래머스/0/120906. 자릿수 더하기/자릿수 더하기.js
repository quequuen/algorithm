function solution(n) {
    return n.toString().split("").map((v)=>(parseInt(v))).reduce((num, v)=>num+v);
}