const productModel = require("../../Models/ProductModel");

const getCategoryProduct = async (req, res) => {
  try {
    const productCategory = await productModel.distinct("Category");

    const productByCategory = [];

    for (const Category of productCategory) {
      const product = await productModel.findOne({ Category });

      if (product) {
        productByCategory.push(product);
      }
    }

    res.json({
      message: "Cotegory Product",
      data: productByCategory,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
};
module.exports = getCategoryProduct;
