const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    console.log([...str].map((v)=>{
        if(v.charCodeAt()>=97){
            return v.toUpperCase();
        }else{
            return v.toLowerCase();
        }
    }).join(''));
});