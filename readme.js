function callback(){
    console.log('gata!');
}
function functie(callback){
    for(let i=0; i<5; i++){
        console.log(i);
    }
    callback();
}
functie(callback);