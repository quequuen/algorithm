function solution(dots) {
    
    //대간선쌍이 무조건 반환되리라는 법이 없음 ->기울기를 구해야 함 y2-y1/x2-x1
    function getslope([x1,y1],[x2,y2]){
        return (y2-y1)/(x2-x1);
    }//기울기 구하는 함수
    //모든 경우의 수를 어떻게 구하지?
    let index = [[0,1,2,3],
                   [0,2,1,3],
                   [0,3,1,2]];
    for(let [a,b,c,d] of index){
        if(getslope(dots[a],dots[b])===getslope(dots[c],dots[d])) return 1;
    }
    return 0;
}