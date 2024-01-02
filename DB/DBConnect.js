const mongoose = require('mongoose');

const DbConn = async () => {
    const dbConn = mongoose
    .connect(process.env.MONGO_URI)
    .then(() => {
      console.log('Successfully Connected to MongoDB');
    })
    .catch((error) => {
      console.error('Error Connecting to MongoDB:', error);
      process.exit(1);
    });
}

module.exports = DbConn;

