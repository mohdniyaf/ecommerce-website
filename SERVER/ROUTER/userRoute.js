const express = require('express');
const router = express.Router();
const { register, login, getuser, updateuser, deleteuser} = require('../CONTROLLER/UserController');
const {getAddress,addAddress,updateAddress ,deleteAddress}=require('../CONTROLLER/AddressController');
const { RegisterSchema, loginSchema } = require('../VALIDATION/Validation');
const Validator = require('../MIDDLEWARE/vald_Middleware');
const {protect,isAdmin} =require('../MIDDLEWARE/Authmid');

//Registration and Login
router.route('/register').post(Validator(RegisterSchema), register);
router.route('/login').post(Validator(loginSchema),login);

//User data, Edit & Update 
router.route('/getuser').get(protect,getuser);
router.route('/updateuser/:id').put(protect,updateuser);
router.route('/address').get(protect,getAddress);
router.route('/addAddress').post(protect,addAddress);
router.route('/updateAddress/:id').put(protect,updateAddress);
router.route('/deleteAddress/:id').delete(protect,deleteAddress);


//Admin Acess
router.route('/deleteuser/:id').delete( protect,isAdmin,deleteuser);

module.exports = router;

