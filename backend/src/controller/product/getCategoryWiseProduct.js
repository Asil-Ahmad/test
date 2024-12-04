const productModel = require("../../Models/ProductModel");

const getCategoryWiseProduct = async(req,res)=>{
  try{
  
    const { Category } = req.body || req.query

    const product = await productModel.find({ Category })

    res.json({
      message : "Product Category",
      data : product,
      success : true,
      error : false
    })
  }catch{
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}
module.exports = getCategoryWiseProduct