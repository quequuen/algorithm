function solution(id_pw, db) {
    let login_arr = db.map(([a,b])=>a===id_pw[0]&&b===id_pw[1]?2:a===id_pw[0]&&b!==id_pw[1]?1:0);
    let answer=Math.max(...login_arr);
    
    return answer===2?"login":answer===1?"wrong pw":"fail";
}