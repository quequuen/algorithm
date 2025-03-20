function solution(numbers) {
    for(let i = 0; i<numbers.length; i++){
        numbers[i] = numbers[i] + numbers[i];
    }
    return numbers;
}