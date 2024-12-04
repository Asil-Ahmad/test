const productModel = require("../../Models/ProductModel")

const SearchProduct = async(req,res)=>{
 try{
 const query = req.query.q

 const regex = new RegExp(query,'i','g')

const product = await productModel.find({
    "$or" : [
        {
            ProductName : regex
        },
        {
            Category : regex
        }
    ]
})
res.json({
    data : product,
    message : "Search Product List",
    success : true,
    error : false
})

 }catch(err){
    res.status(400).json({
        message : err.message|| err ,
        error : true,
        success : false
    })
 }
}
module.exports = SearchProduct