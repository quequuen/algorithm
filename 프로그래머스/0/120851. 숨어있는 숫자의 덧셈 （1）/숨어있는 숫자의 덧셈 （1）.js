function solution(my_string) {
   return my_string.match(/\d/g).map((v)=>Number(v)).reduce((sum,v)=>(sum+v),0);
}