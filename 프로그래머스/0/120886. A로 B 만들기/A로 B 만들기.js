function solution(before, after) {
    let answer = 1;
    let before_cnt = {};
    let after_copy = new Set([...after]);
    let apple_cnt = 0;
    
    for(alpha of before){
        before_cnt[alpha] = (before_cnt[alpha]===undefined)?1:before_cnt[alpha]+1;
    }
    for(alpha of after){
        apple_cnt = [...after].join("").split(alpha).length-1;
        answer &= (before_cnt[alpha]===apple_cnt)?1:0;
    }
    
    
    return answer;
}