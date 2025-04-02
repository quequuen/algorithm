function solution(n) {
    var arr = [];
       function a(v){
           let count = 0;
           for(let i= 1; i<=v; i++){
               if(v%i==0){
                   count++;
               }
           }
           if(count>=3){
               return v;    //인수가 3개 이상이면 해당 수를 리턴
           }else{
               return;  //그렇지 않으면 undefined
           }
       }
    
    //4에서 n만큼 a함수를 반복시킴
    for(let i = 4; i<=n; i++){
        if(a(i)!=undefined){
            arr.push(i);
        }
    }
    return arr.length;
    
}