function solution(age) {
    let age_arr = String(age).split('').map((v)=>parseInt(v));
    let alpha =Array.from({length:26},(_,i)=>(String.fromCharCode(i+97)))
    
    return age_arr.map((v)=>alpha[v]).join('');
    
    
    
}