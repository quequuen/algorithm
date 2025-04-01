function solution(num_list, n) {
    var answer = [];
    for(let i = 0; i<num_list.length;i+=n){
        var arr = [...num_list];
        answer.push(arr.slice(i,i+n));
    }
    
    return answer;
}