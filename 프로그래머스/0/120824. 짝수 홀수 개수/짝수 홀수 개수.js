function solution(num_list) {
    let a = 0, b = 0;
    for(i in num_list){
        if(num_list[i]%2==0){
            a++;
        }
        else{
            b++;    
        }
    }
    return [a,b];
}