const express = require('express');
const router = express.Router();



const UserLogout = require('../controller/user/UserLogout');
const authToken = require('../middleware/authtoken');
const UserSignupController = require('../controller/user/UserSignup');
const userSigninController = require('../controller/user/UserSignin');
const UserDetailsController = require('../controller/user/UserDetails');
const Allusers = require('../controller/user/Allusers');
const UpdateUser = require('../controller/user/UpdateUser');
const uploadProductController = require('../controller/product/uploadProduct');
const getProductController = require('../controller/product/getProduct');
const UpdateProductController = require('../controller/product/UpdateProduct');
const getCategoryProduct = require('../controller/product/getOneCategoryProduct');
const getOneCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct');
const getProductDetails = require('../controller/product/getProductDetails');
const addToCartController = require('../controller/user/addToCartController');
const countAddToCartProduct = require('../controller/user/countAddToCartProduct');
const addToCartViweProduct = require('../controller/user/addToCartViweProduct');
const updateCartProduct = require('../controller/user/updateCartProduct');
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct');
const SearchProduct = require('../controller/product/searchProduct');
const filterProduct = require('../controller/product/filterProduct');



// User
router.post("/signup",UserSignupController) 
router.post("/signin",userSigninController)
router.get('/user-details',authToken,UserDetailsController)
router.get('/logout',UserLogout)

// Admin Panel
router.get('/all-users',authToken,Allusers)
router.post('/update-user',authToken,UpdateUser)

// Product
router.post('/upload-product',authToken,uploadProductController)
router.get('/get-product',getProductController)
router.post('/update-product',authToken,UpdateProductController)
router.get('/get-CategoryProduct',getCategoryProduct)
router.post('/product-category',getOneCategoryWiseProduct)
router.post('/product-details',getProductDetails)
router.get('/search',SearchProduct)
router.post('/filter-product',filterProduct)

// Add To Cart
router.post('/addtocart',authToken,addToCartController)
router.get('/countAddToCartProduct',authToken,countAddToCartProduct)
router.get('/viwe-cart-product',authToken,addToCartViweProduct)
router.post('/update-cart-product',authToken,updateCartProduct)
router.post('/delete-cart-product',authToken,deleteAddToCartProduct)

module.exports = router 