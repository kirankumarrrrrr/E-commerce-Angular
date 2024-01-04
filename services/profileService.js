const profileSchema = require('../ModelSchema/ProfileSchema')

exports.updateProfile = async (req, res) => {
  try {
    let find =  await profileSchema.findOne({email:req.body.email});
    if(find){
        await profileSchema.updateOne({email:req.body.email},{
            $set:{
                firstname: req.body.firstName,
                lastname: req.body.lastName,
                mobile: req.body.mobile,
                email: req.body.email,
                gender: req.body.gender,
                dob: req.body.dob
            }
        });
        res.status(200).json({ message: 'Profile updated successfully' });
    }else{
        await profileSchema.create(req.body);
        res.status(200).json({ message: 'Profile created successfully' });
    }

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

exports.createProfile = async(data)=>{
    await profileSchema.create(data);
    return true;
}

exports.getProfile = async (req, res) => {
  try {
    let profile = await profileSchema.findOne({ email: req.body.email });
    res.status(200).json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};