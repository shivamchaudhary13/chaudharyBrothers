const express = require("express");
const addProductController = require("../controller/products.controller");
const router = express.Router();

router.post('/addproduct',addProductController.addProducts);
router.get('/getproducts',addProductController.getProducts);
router.delete('/deleteproduct/:id',addProductController.deleteProducts);
router.patch('/updateproducts/:name',addProductController.updateProducts);
router.patch('/updateitem/:id',addProductController.updateItem);
module.exports = router;