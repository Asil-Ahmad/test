const productModel = require("../../Models/ProductModel");

const filterProduct = async(req, res) => {
    try{
 const CategoryList = req.body.Category

 const product = await productModel.find({
    Category : {
       "$in" : CategoryList
    }
 })

 res.json({
    data : product,
    message : "Product",
    success : true,
    error : false
 })
    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
          });
    }
}
module.exports = filterProduct