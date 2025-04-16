function solution(keyinput, board) {
  const stand = board.map((v) => parseInt(v / 2));
  const answer = [0,0];
    for(let i=0; i<keyinput.length;i++){
        if(keyinput[i]==="left"&&answer[0]>-1*stand[0]){
            answer[0]--;
        }
        if(keyinput[i]==="right"&&answer[0]<stand[0]){
            answer[0]++;
        }
        if(keyinput[i]==="down"&&answer[1]>-1*stand[1]){
            answer[1]--;
        }
        if(keyinput[i]==="up"&&answer[1]<stand[1]){
            answer[1]++;
        }
    }
    return answer;
}