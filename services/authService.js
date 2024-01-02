const userSchema = require("../ModelSchema/userSchema")

exports.createUser = async (req, res) => {
  try {
      // Use the specified collection name when finding and creating users
      const findUser = await userSchema.findOne({"email":req.body.email});
  
      if (!findUser) {
        // Create a new user
        const newUser = await userSchema.create(req.body);
        res.status(200);
        res.json(newUser);
      } else {
        // User already exists
        res.status(200);
        res.json({
          message: "User Already Exists",
          success: false
        });
      }
    } catch (error) {
      // Handle any errors that may occur during database operations
      console.error(error);
      res.status(500).json({
        message: "Internal Server Error",
        success: false
      });
    }
  };

exports.LoginUser = async(req, res) => {
  try{
    const findUser = await userSchema.findOne({"email":req.body.email,"password":req.body.password});
    if(findUser){
       res.status(200);
       res.json({
        message: "valid Credentials.",
        success: true,
        Data: findUser
      });
    }else{
        res.json({
            message: "Invalid Credentials.",
            success: false
          });
    }
  }catch(err){
    // Handle any errors that may occur during database operations
    console.error(error);
    res.status(500).json({
      message: "Internal Server Error",
      success: false
    });
  }
}

