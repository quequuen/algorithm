function solution(dots) {
    
    
    function getslope([x1,y1],[x2,y2]){
        return (y2-y1)/(x2-x1);
    }
    let index = [[0,1,2,3],
                   [0,2,1,3],
                   [0,3,1,2]];
    for(let [a,b,c,d] of index){
        if(getslope(dots[a],dots[b])===getslope(dots[c],dots[d])) return 1;
    }
    return 0;
}
