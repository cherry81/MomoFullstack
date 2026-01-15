const Product = require("../models/product.model");
const { uploadeOnCloudinary } = require("../utils/upload.utils");

async function createProduct(req, res) {
  const { name, price, description, quantity } = req.body;
  // console.log(req.body);
  // console.log(req.file.path);
  // res.send("Create Product");

  const response = await uploadeOnCloudinary(req.file?.path);
  // console.log(response);

  const product = await Product.create({
    name,
    price,
    description,
    image: response.url,
    quantity,
  });
  res.status(201).json({
    message: "Product Created Sucessfully",
    product,
  });
}

async function getProducts(req, res) {
  const products = await Product.find();
  res.status(200).json({
    message: "Products fetched Sucessfully",
    products,
  });
}
module.exports = { createProduct, getProducts };
