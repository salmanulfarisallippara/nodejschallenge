var express = require('express');
var router = express.Router();


let product = [
  {
    name: "iphone",
    description: "this good phone",
    image: "https://www.91-img.com/gallery_images_uploads/0/2/02e981af8b3f8f4897642fd9601c89df048b5669.jpeg?tr=h-550,w-0,c-at_max"
  }, {
    name: "iphone",
    description: "this good phone",
    image: "https://www.91-img.com/gallery_images_uploads/0/2/02e981af8b3f8f4897642fd9601c89df048b5669.jpeg?tr=h-550,w-0,c-at_max"
  }, {
    name: "iphone",
    description: "this good phone",
    image: "https://www.91-img.com/gallery_images_uploads/0/2/02e981af8b3f8f4897642fd9601c89df048b5669.jpeg?tr=h-550,w-0,c-at_max"
  }, {
    name: "iphone",
    description: "this good phone",
    image: "https://www.91-img.com/gallery_images_uploads/0/2/02e981af8b3f8f4897642fd9601c89df048b5669.jpeg?tr=h-550,w-0,c-at_max"
  }
]
/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('admin/addProduct', { admin: true, product })
});
router.get('/product', (req, res) => {
  res.render('admin/product', { product })
})
router.post('/product', (req, res) => {
  console.log(req.body)
  console.log(req.files.image)
})
module.exports = router;
