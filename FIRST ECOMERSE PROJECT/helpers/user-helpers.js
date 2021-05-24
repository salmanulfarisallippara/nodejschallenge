var db=require('../config/connection')
var collection =require('../config/collection')
var bcrypt = require('bcrypt')
const { resolve } = require('promise')
const e = require('express')

module.exports = {
    doSignup : (userdata)=>{
        return new Promise(async(resolve,reject)=>{
            userdata.Password=await bcrypt.hash(userdata.Password,10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userdata).then((data)=>{
                resolve(data.ops[0])
            })
        })

    },
    doLogine:(userdata)=>{
        return new Promise(async(resolve,reject)=>{
            let loginStatus=false
            let response={}
            let user=await db.get().collection(collection.USER_COLLECTION).findOne({Email:userdata.Email})
            if (user){
                bcrypt.compare(userdata.Password,user.Password).then((status)=>{
                    if(status){
                        console.log("login success");
                        response.status=true;
                        response.user=user
                        resolve(response)
                    }else{
                        console.log("login fail");
                        resolve({status:false})
                    }

                })
            }else{
                console.log("login fail");
                resolve({status:false})
            }
        })
    }
}