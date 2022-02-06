const express = require("express");
const router = express.Router();
const { uploadFile } = require("../middleware/uploadFile");

const {
  getProducts,
  getProduct,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/product-controllers");

router.get("/products", getProducts);
router.get("/product/:id", getProduct);
router.post("/product", uploadFile("photo"), addProduct);
router.patch("/product/edit/:id", editProduct);
router.delete("/product/delete/:id", deleteProduct);

module.exports = router;
