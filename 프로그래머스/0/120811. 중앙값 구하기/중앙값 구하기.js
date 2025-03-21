function solution(array) {
    let array2=[];
    array2 = array.sort((a,b)=>a-b);
    let mid = 0;
    
    if(array.length/2===0){
        
        mid= (array2[(array2.length/2)-1]+array2[array2.length/2]);
        console.log(mid);
        return mid;
        
    }else{
        mid = Math.ceil((array2.length)/2);
        console.log(array2[mid-1]);
        return array2[mid-1];
    }
    
    
}