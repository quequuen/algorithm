function solution(my_string) {
    var num_arr = [...my_string].filter((v)=>(v>=0&&v<=9));
    return num_arr.sort().map((v)=>(parseInt(v)));
    
    
}