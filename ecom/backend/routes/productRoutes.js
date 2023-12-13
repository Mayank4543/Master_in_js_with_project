const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controller/productController");
const { isAuthenticatedUser, authorisedRoles } = require("../middleware/auth");
const router = express.Router();

router.route("/products").get(isAuthenticatedUser, getAllProducts);
router
  .route("/products/:id")
  .get(isAuthenticatedUser, authorisedRoles("admin"), getProductDetails);
router
  .route("/products/new")
  .post(isAuthenticatedUser, authorisedRoles("admin"), createProduct);
router
  .route("/products/:id")
  .put(isAuthenticatedUser, authorisedRoles("admin"), updateProduct);
router.route("/products/:id").delete(isAuthenticatedUser, deleteProduct);

module.exports = router;
