function solution(numbers, k) {
    if(k*2-2>=numbers.length){
        return numbers[(k*2-2)%numbers.length];
    }else{
        return numbers[(k*2-2)];
    }
    
}