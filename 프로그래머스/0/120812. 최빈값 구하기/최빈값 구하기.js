function solution(array) {
    let dict = {};
    
    for(let i = 0; i<array.length;i++){
        const num = array[i];
        if(dict[num]){
            dict[num] += 1;
        } else{
            dict[num] =1;
        }
        
    }
    console.log(dict);
    
    let maxCount =0 ;
    let modArr = [];
    
    for(let key in dict){
        if(dict[key]>maxCount){
            maxCount = dict[key];
            modArr = [parseInt(key)];
        }else if(dict[key]===maxCount){
            modArr.push(dict[key]);
        }
    }
    
    let mod = 0;
    
    if(modArr.length>1){
        mod = -1;
    }else{
        mod = modArr[0];
    }
    return mod;
}