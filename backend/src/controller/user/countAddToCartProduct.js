const addToCartModel = require("../../Models/cartProduct");

 const countAddToCartProduct = async(req,res)=>{
    try{
        const userId = req.userId

        const count = await addToCartModel.countDocuments({
            userId : userId
        })
        res.json({
            data :  {
                count : count
            },
            message : "ok",
            success : true,
            errror :false
        })

    }catch(err){
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false,
          });
    }
 }
 module.exports = countAddToCartProduct