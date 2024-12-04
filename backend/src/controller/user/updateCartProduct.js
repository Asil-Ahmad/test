const addToCartModel = require("../../Models/cartProduct");

const updateCartProduct = async(req,res)=>{
    try{
const currentUserId = req.userId
const addToCartProduct = req.body._id

const qty = req.body.quantity

const updateCartProduct = await addToCartModel.updateOne({_id : addToCartProduct},{
   ...(qty && {quantity:qty})
})

res.json({
    data : updateCartProduct,
    message : "Product Updated",
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
module.exports = updateCartProduct