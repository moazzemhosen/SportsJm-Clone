const express = require("express");
const app = express();
app.use(express.json());
const connect =require("./configs/db")
require('dotenv').config()
const cors = require("cors");
app.use(cors());

const registerationControl = require("./controls/registeration.control");
app.use("/signup" , registerationControl);

const loginControl = require("./controls/login.control");
app.use("/login" , loginControl)

const productControl = require("./controls/product.control");
app.use("/products" , productControl)

// app.use("/", (req, res) => {
//     res.send(
//       `<h1 style="color:#C7AA8D;font-size:46px;margin:20px auto;">Welcome TO Auth.All set...</h1>`
//     );
//   });
app.listen(process.env.PORT ||3030 ,async()=>{
    try{
        await connect();
        console.log(`running on ${process.env.PORT}`)
    }
    catch(err)
    {
        console.log(err.message);
    }

})