const express = require('express');
const router = express.Router();
const {getCategory,productLoad, allProducts,productSingleView,addProduct ,addCategory } = require('../CONTROLLER/ProductController');
const multer = require('multer');
const path = require('path');
const {protect,isAdmin} =require('../MIDDLEWARE/Authmid');

// Multer configuration for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/images');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});


const upload = multer({ storage: storage });



// Route to add a product

router.route('/addProduct').post(upload.single('images'), addProduct);


router.route('/getcategory').get(getCategory);
router.route('/productload').get(protect,productLoad);
router.route('/productSingleView/:id').get(productSingleView);
router.route('/addCategory').post(addCategory);
router.route('/allProducts').get(allProducts);


module.exports = router;
