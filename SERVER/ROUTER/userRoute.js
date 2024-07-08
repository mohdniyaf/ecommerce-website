const express = require('express');
const router = express.Router();
const { register, login, getuser, updateuser, deleteuser } = require('../CONTROLLER/UserController');
const { RegisterSchema, loginSchema } = require('../VALIDATION/Validation');
const Validator = require('../MIDDLEWARE/vald_Middleware');
const {protect,isAdmin} =require('../MIDDLEWARE/Authmid');

router.route('/register').post(Validator(RegisterSchema), register);
router.route('/login').post(Validator(loginSchema), login);
router.route('/getuser').get(protect,isAdmin, getuser);
router.route('/updateuser/:id').put( updateuser);
router.route('/deleteuser/:id').delete( protect,isAdmin,deleteuser);

module.exports = router;

