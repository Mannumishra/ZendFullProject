const express = require('express');
const { createProduct, getProducts, getProductById, updateProduct, deleteProduct, getProductByProductName, getAllProductsByCategoryName } = require('../controllers/productControllers');
const upload = require('../middleware/multer');

const productRouter = express.Router();

productRouter.post('/products', upload.array("productImage", 10), createProduct);
productRouter.get('/products', getProducts);
productRouter.get('/products/:id', getProductById);
productRouter.get('/products/name/:name', getProductByProductName);
productRouter.get('/products/category/:categoryName', getAllProductsByCategoryName);
productRouter.put('/products/:id', upload.array("productImage", 10), updateProduct);
productRouter.delete('/products/:id', deleteProduct);

module.exports = productRouter;
