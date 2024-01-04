const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
const profileSchema = new mongoose.Schema({
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },
    mobile: {
      type: String,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
    },
    dob: {
      type: String,
    },
  });
  

//Export the model
module.exports = mongoose.model('Profile', profileSchema,'Profiles');