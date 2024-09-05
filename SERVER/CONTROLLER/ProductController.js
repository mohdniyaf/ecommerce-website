const category = require('../MODEL/categorySchema');
const Product = require('../MODEL/ProductSchema');



// Function to get categories
const getCategory = async function (req, res) {
  try {
    const response = await category.find({ active: true });
    if (response.length > 0) {
      res.status(200).json(response);  
    } else {
      res.status(404).json({ message: "Couldn't find categories" });  
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Server error" });  
  }
};



// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
// <                             <$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ USER SIDE $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>                            > //
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//





// <-------------------------------------------------------| RENDERING PRODUCTS ACCORDING TO THE CATEGORIES -----------------------------------|>
const productLoad = async (req, res) => {
  try {
    const id = req.query.id;
    const product = await Product.find({ category: id }).populate("category");

    console.log(product);
    const user = req.user;

    const headCategory = await getCategory();
  } catch (error) {
    console.log("Try catch error in productLoad 🤷‍♀️📀🤷‍♂️");
    console.log(error.message);
  }
};





// <-------------------------------------------------------| RENDERING ALL PRODUCTS -----------------------------------------------------------|>
const allProducts = async (req, res) => {
  try {    
    const response = await Product.find({});

    res.status(200).json(response);
  } catch (error) {
    console.log("Try catch error in allProducts 🤷‍♀️📀🤷‍♂️");
    console.log(error.message);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};







// <-------------------------------------------------------| RENDERING DETAILED VIEW OF A  PRODUCTS -------------------------------------------|>
const productSingleView = async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    
    // Fetch product by ID
    const product = await Product.findById(id);
    console.log(product);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Send the product details back to the client
    res.status(200).json(product);
    
  } catch (error) {
    console.log("Try catch error in productSingleView 🤷‍♀️📀🤷‍♂️");
    console.log(error.message);

    // Handle errors gracefully
    res.status(500).json({ message: "Server error" });
  }
};






// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^//
// <                             <$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$ ADMIN SIDE $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$>                            > //
// vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv//
const addProduct = async (req, res) => {
  try {
    const { categoryName, name, price, offerPrice, description, isFeatured, stock } = req.body;

    // Find the category by name
    const Category = await category.findOne({ categoryName });

    if (!Category) {
      return res.status(400).json({ message: 'Category not found' });
    }

    // Handle the image upload
    let imageObjects = [];
    if (req.file) {
      imageObjects.push({
        url: req.file.path, // Save the image path as the URL
        altText: `${name} image`, // Optionally, generate an alt text
        caption: `${name} product image`, // Optionally, generate a caption
      });
    }

    // Create the product with the category's ObjectId
    const newProduct = new Product({
      name,
      category: Category._id,
      price,
      offerPrice,
      description,
      images: imageObjects,  // Store the image object in the images array
      isFeatured,
      stock,
    });
 

    // Save the product
    const savedProduct = await newProduct.save();
    res.status(201).json({ message: 'Product added successfully', product: savedProduct });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};



// Controller function to add a category
const addCategory = async (req, res) => {
  try {
      const { categoryName } = req.body;

      // Check if category already exists
      const existingCategory = await category.findOne({ categoryName });
      if (existingCategory) {
          return res.status(400).json({ message: 'Category already exists' });
      }
      // Create a new category
      const newCategory = new category({ categoryName });
      await newCategory.save();
      res.status(201).json({ message: 'Category added successfully', category: newCategory });
  } catch (error) {
      console.error('Error adding category:', error);
      res.status(500).json({ message: 'Server error' });
  }
};


const getProduct = async (req, res) => {
  try {
    // Fetch product by ID from request parameters
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({ message: 'Product ID is required' });
    }
    // Fetch the product from the database
    const product = await Product.findById(productId).populate('category');

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.status(200).json({ product });
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getProductsByCategory = async (req, res) => {
  try {
    // Fetch category by name from request parameters
    const categoryName = req.params.categoryName;
    if (!categoryName) {
      return res.status(400).json({ message: 'Category name is required' });
    }
    // Find category by name
    const category = await Category.findOne({ categoryName });

    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }

    // Fetch products for the given category
    const products = await Product.find({ category: category._id });

    res.status(200).json({ products });
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ message: 'Server error' });
  }
};


module.exports = { getCategory ,productLoad,allProducts,productSingleView,addProduct,addCategory,getProduct,getProductsByCategory };
