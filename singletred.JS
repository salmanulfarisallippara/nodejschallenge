// var dt =new Date()
// for(i=0;i<1000;i++){
//     console.log("loop")
// }
// console.log("end")
// var diff = new Date()-dt
// console.log("time  =  "+diff)

function longTime(milsec){
    var dt = new Date();
    while(new Date()-dt <= milsec){

    }
}
//syncranised
console.log("started")
longTime(2000)
console.log("end")

console.log("started")
longTime(2000)
console.log("end")

console.log("started")
longTime(2000)
console.log("end")


//async /call back

function showEnd(){
    console.log("end")
}

console.log("start")
setTimeout(showEnd,2000)

console.log("start")
setTimeout(showEnd,2000)

console.log("start")
setTimeout(showEnd,2000)