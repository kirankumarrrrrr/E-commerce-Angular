const cartSchema = require('../ModelSchema/cartSchema');

exports.addtocart = async (req,res) => {
    try{
        let data = req.body;
        let itempresent = await cartSchema.findOne({
            $and: [
              { email: data.email },
              { id: data.id }
            ]
          });
        if(itempresent){
            let add = itempresent.quantity+1;
           let newitem = await cartSchema.updateOne({ $and: [
                { email: data.email },
                { id: data.id }
              ]},{
              $set:{
                quantity:Number(add)
              }
            })
            res.status(200);
            res.json(newitem);
        }else{
            const newitem = await cartSchema.create(data);
            res.status(200);
            res.json(newitem);
        }
    }catch(err){
        console.error(err);
        res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }
}

exports.deletecartitem = async (req,res) => {
    try{
        let data = req.body;
        let itempresent = await cartSchema.findOne({
            $and: [
              { email: data.email },
              { id: data.id }
            ]
          });
        if(itempresent){
            let deleteditem = await cartSchema.deleteOne({
                $and: [
                    { email: data.email },
                    { id: data.id }
                  ]
            })
            res.status(200);
            res.json(deleteditem);
        }else{
            res.status(200).json({
                message: "No item available in cart",
                success: true
              });
        }
    }catch(err){
        console.error(err);
        res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }
}

exports.getCartdataByUser = async (req,res) => {
    try{
        let useremail = req.body.email;
        let cartdatabyuser = await cartSchema.find({email:useremail});
        res.status(200).json(cartdatabyuser);
    }catch(err){
        console.error(err);
        res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }
}