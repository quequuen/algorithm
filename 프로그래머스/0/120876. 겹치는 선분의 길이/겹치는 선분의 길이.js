function solution(lines) {
    
    let object = {};
    let count = 0;
    for(let [a,b] of lines){
        for(let i=a+1;i<=b;i++){
            object[i]=(object[i]+1||0);
        }
    }
    
    for(let key in object){
        if(object[key]>0){
            count++;
        }
    }
    
    
    return count;
}
