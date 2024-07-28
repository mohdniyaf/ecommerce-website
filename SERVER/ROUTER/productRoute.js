const express=require('express');
const router=express.Router();
const {protect,isAdmin} =require('../MIDDLEWARE/Authmid');


router.route('/').get();
router.route("/:id").get();
router.route('/new').post();
router.route("/:id").delete();
router.route("/:id").put( );

module.exports = router;

