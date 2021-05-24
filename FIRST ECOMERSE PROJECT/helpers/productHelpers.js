const { reject } = require('promise')
var db=require('../config/connection')
var collection =require('../config/collection')
module.exports={
    addProduct : (product,callback)=>{
        db.get().collection('product').insertOne(product).then((data)=>{
            callback(data.ops[0]._id)
        })
    },
    getAllProduct:()=>{
        return new Promise(async(resolve,reject)=>{
            let product = await db.get().collection(collection.PRODUCT_COLLECTION).find().toArray()
            resolve(product)
        })
    }
}