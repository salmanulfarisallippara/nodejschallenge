var express = require('express');
var router = express.Router();
var productHelpers = require('../helpers/productHelpers')


/* GET users listing. */
router.get('/', function (req, res, next) {
  productHelpers.getAllProduct().then((product)=>{
    res.render('admin/addProduct', { admin: true, product })
  })
});
router.get('/product', (req, res) => {
  res.render('admin/product')
})
router.post('/product', (req, res) => {
  productHelpers.addProduct(req.body,(id)=>{
    let image = req.files.image
    image.mv('./public/product-images/'+id+'.jpg',(err,done)=>{
      if(!err){
        res.render("admin/product")
      }else{
        console.log(err)
      }
    })
    
  })
})
module.exports = router;
