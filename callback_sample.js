

function longTask(millSecondTime){
    dateAndTime=new Date()
        while((new Date-dateAndTime)<= millSecondTime) {

            
        }
    
}
function showEnd(){
console.log("End");


}
console.log('Started');
setTimeout(showEnd,2000)

console.log('Started');
setTimeout(showEnd,2000)

console.log('Started');
setTimeout(showEnd,2000)

console.log('Started');
setTimeout(showEnd,2000)



//call Back//


var hello=function(data){
    console.log('Data : '+data);

    
}
var hey=function(callback){
    callback("VpThahir")

}
hey(hello)
