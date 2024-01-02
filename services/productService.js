const productSchema = require('../ModelSchema/productSchema');


exports.getProducts = async (req,res) => {
    try{
        let allproducts = await productSchema.find();
        res.status(200);
        res.json(allproducts);
    }catch(err){
        console.error(err);
        res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }

}