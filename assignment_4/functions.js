

function callingBack(){
function yay (){
    console.log("It's a callback");
}
function useCallback(cb){
    console.log("start");
    cb();
}
useCallback(yay);}

function promise1(){
var promise0 = new Promise (function(res,rej){
    setTimeout(res,900,"Hey it's a success");
    setTimeout(rej,900,"Error");
})
promise0.then(function(pcb){
    console.log(pcb);
},
function (r){
    console.log(r);
})}

