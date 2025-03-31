function solution(rsp) {
    var rsp_win = {2:0,0:5,5:2};
    
    return rsp.split("").map((v)=>rsp_win[v]).join('');
}