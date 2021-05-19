const { resolve, reject } = require('promise');
const promise = require('promise');
function add(num1,num2){
     return new promise((resolve,reject)=>{
         if (num1==0){
             reject("first number is zero")
         }else{
             resolve(num1+num2)
         }
     })
}
function Multiply(num1,num2){
    return new promise((resolve,reject)=>{
        if (num1==0){
            reject("first number is zero")
        }else{
            resolve(num1*num2)
        }
    })
}
function devid(num1,num2){
    return new promise((resolve,reject)=>{
        if (num1==0){
            reject("first number is zero")
        }else{
            resolve(num1/num2)
        }
    })
}

add(10,20).then((sum)=>{
    console.log(sum)
    return Multiply(sum,sum)
}).then((mult)=>{
    console.log(mult)
    return devid(mult,3)
}).then((div)=>{
    console.log(div)
}).catch((err)=>{
    console.log(err)
})

