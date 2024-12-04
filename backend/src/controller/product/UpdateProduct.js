const productModel = require("../../Models/ProductModel")
const uploadProductPermission = require("../../helpers/permission")


async function UpdateProductController(req, res) {
try{

 if(!uploadProductPermission(req.userId)){
    throw new Error ("Permission denied")
  }

  const {_id, ...resBody} = req.body

  const updateproduct = await productModel.findByIdAndUpdate(_id,resBody)

  res.json({
    message : "Product Updated Successfully",
    success : true,
    error : false,
    data : updateproduct
  })

}catch(err){
    res.status(400).json({
        message : err.message|| err ,
        error : true,
        success : false

    })
}
    
}
module.exports = UpdateProductController