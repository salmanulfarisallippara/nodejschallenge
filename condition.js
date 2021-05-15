read = require ("readline-sync");
var value=read.question("enter  two anumber");
var value2=read.question("")
if(value<value2){
    console.log("large= "+value2)
}else if(value2===value){
    console.log("same number")
}else{
    console.log("larger ="+value)
}