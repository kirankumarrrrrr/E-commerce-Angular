const express = require("express");
const app = express();
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 4000;
const DbConn = require('./DB/DBConnect');
const authRouter = require('./routes/authRoute');
const cartRouter = require('./routes/cartRoute');
const productRouter = require('./routes/ProductsRoute');
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require('morgan')

DbConn();

app.use(cors());

app.use(bodyParser.json());

app.use(morgan("tiny"));

app.use('/api/user', authRouter);
app.use('/api/cart', cartRouter);
app.use('/api/product', productRouter);

app.listen(PORT,()=>{
    console.log(`Server running at port ${PORT}`);
})