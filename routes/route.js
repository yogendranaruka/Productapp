const express = require('express');
const router = express.Router();
let { userAuth } = require('../auth')
let productController = require('../controllerss/product.controller');
let userController = require('../controllerss/user.controller');

//User
router.post('/register', userController.register);
router.post('/login', userController.login);

//Product 
router.post('/createProduct', userAuth, productController.createProduct);
router.get('/getProduct', userAuth, productController.getProduct);
router.patch('/updateProduct/:id', userAuth, productController.updateProduct);
router.delete('/deleteProduct/:id', userAuth, productController.deleteProduct);

module.exports = router;

