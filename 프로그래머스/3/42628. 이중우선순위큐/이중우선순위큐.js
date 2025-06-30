function solution(operations) {
//     I- 숫자 숫자 추가
//     D 1 최댓값 삭제
//     D -1 최솟값 삭제
    var answer = [];
    operations.forEach((el)=>{
        const arr = el.split(" ");
        switch(arr[0]){
            case 'I': 
                answer.push(Number(arr[1]));
                break;
            case 'D':
                if(arr[1]==="1"){
                    const max = Math.max(...answer);
                    const i = answer.indexOf(max);
                    answer.splice(i,1);
                }else if(arr[1]==="-1"){
                    const min = Math.min(...answer);
                     const i = answer.indexOf(min);
                    answer.splice(i,1);
                }
                break;
        }
    });
    return answer.length===0?[0,0]:[Math.max(...answer),Math.min(...answer)];
}