var add = require("./add");
var read = require("readline-sync")

console.log("enter two number")
var a = read.question()
var b = read.question()
add.sum(new Number(a) ,new Number(b))