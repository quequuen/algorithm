function solution(price, money, count) {
    let answer = 0;
    let acc = 0;
    for(let i=1;i<=count;i++){
        acc += i*price;
    }

    return money>=acc?0:acc-money;
}