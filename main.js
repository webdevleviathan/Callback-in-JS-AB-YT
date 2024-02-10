/*
function log(){
    console.log('Task-ul este gata!');
}
function task(callback){
    for(let i=0; i<10; i++){
        console.log(i);
    }
    callback();
}
task(log);




let arr = [-1, 2, 3, 4, 5];

function numerePare(arr){
    let res = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            res.push(arr[i]);
        }
    }
    return res;
}
function numereInpare(arr){
    let res = [];
    for(let i=0; i<arr.length; i++){
        if(Math.abs(arr[i] % 2) ==1){
            res.push(arr[i]);
        }
    }
    return res;
}
function filtreaza(arr, callback){
    let res = [];
    for (let i=0; i<arr.length; i++){
        if(callback(arr[i])){
            res.push(arr[i]);
        }
    }
    return res;
}
function pare(nr){
    return nr % 2 == 0;
}

let res = filtreaza(arr, (n) => Math.abs(n % 2) ==1);
console.log(res);

*/

let arr = [-1, 2, 3, 4, 5];
function contineNumerePare(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            return true;
        }
    }
    return false;
}
function oricare(arr, callback){
    for(let i=0; i<arr.length; i++){
  if(callback(arr[i])){
    return true;
} 
}
return false;
}

let res = oricare(arr, (n) => n < 0);
console.log(res);