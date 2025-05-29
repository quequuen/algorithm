function solution(players, callings) {
    const playerMap = {};
    for(let i in players){
        playerMap[players[i]] =i;
    }
 
    for (let calling of callings){
        let idx = playerMap[calling];
        [players[idx-1],players[idx]] =[players[idx],players[idx-1]];   
        
        playerMap[calling] = idx -1;
        playerMap[players[idx]] =idx;
    }
    return players;
    
}