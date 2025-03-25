function solution(money) {
    const iceAme = 5500;
    return [Math.floor(money/iceAme),money%iceAme];
}