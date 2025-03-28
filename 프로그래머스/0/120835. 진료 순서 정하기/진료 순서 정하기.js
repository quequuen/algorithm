function solution(emergency) {
    function getRank(v){
        let sort = [...emergency].sort(function(a,b){
            return b-a;
        });
        return sort.indexOf(v)+1;
    }
    return emergency.map((v)=>(getRank(v)));
}