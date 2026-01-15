const express = require("express");
const {
  createProduct,
  getProducts,
} = require("../controllers/product.controllers");
const { authUserMiddleware } = require("../middlewares/auth.middleware");
const multer = require("multer");
const { upload } = require("../middlewares/multer.middleware");
const router = express.Router();

// const upload = multer({
//   storage: multer.memoryStorage(),
// });
router.post(
  "/create",
  authUserMiddleware,
  upload.single("image"),
  createProduct
);

router.get("/", getProducts);

module.exports = router;
