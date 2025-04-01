function solution(numbers, direction) {
    const [first, ...rest] = [...numbers];
    var last = numbers.at(-1);
        if(direction==="left"){
            return [...numbers.slice(1),first];
        }
        else{
            return [last, ...numbers.slice(0,-1)];
        }
}