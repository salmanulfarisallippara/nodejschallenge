
const { response } = require('express');
var express = require('express');
const { resolve } = require('promise');
var router = express.Router();
var product_helpers = require('../helpers/productHelpers')
var userHelpers = require('../helpers/user-helpers')

/* GET home page. */
router.get('/', function (req, res, next) {
  let user =req.session.user
  product_helpers.getAllProduct().then((product) => {
    res.render('index', { product,user});
  })
});
router.get('/login', (req, res) => {
  res.render('user/login')
})
router.get('/sighnup', (req, res) => {
  res.render('user/sighnup')
})
router.post('/sighnup', (req, res) => {
  userHelpers.doSignup(req.body).then((response) => {
    
  })

})
router.post('/login',(req,res)=>{
  userHelpers.doLogine(req.body).then((response)=>{
    if(response.status){
      req.session.loggedIn=true
      req.session.user=response.user
      res.redirect('/')
    }else{
      res.redirect('/login')
    }
  })
})
router.get('/logout',(req,res)=>{
  req.session.destroy()
  res.redirect('/')
})


module.exports = router;
