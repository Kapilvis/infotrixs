const express = require("express");   //  to express 
const mysql = require("mysql2");  // for db connection
const dotenv = require("dotenv"); //  private file to secure data 
const cors = require("cors"); // crete connectio between uI to db 

// const nodemailer = require("nodemailer");  //  message sender for user 
const conn = require("./config/dbconnection");  // for connection of config file 
const app=express();

app.use(cors({
    origin: ["http://localhost:4200"]   // for request accepting 
}));
process.env.TZ="Asia/Kolkata"




app.use(express.json());  //  express ko chalu kia 
app.use("/user",require("./routes/user"));  // request related to user route to user section
app.use("/message",require("./routes/message"));  // request related to user route to Address section
// app.use("/product",require("./routes/product"));  // request related to user route to product section
// app.use("/orders",require("./routes/orders"));  // request related to user route to orders section
// app.use("/category",require("./routes/category"));  // request related to user route to category section



app.listen(process.env.port, () => {
    console.log("process run on " + process.env.port);
});





//__________________________________________________________
app.get("/", (req, res) => {
    conn.query("select *from user", (err, data) => {
        console.log(data);
        res.send(data);
    });
});
//__________________________________________________________


       




