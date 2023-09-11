const express = require("express");
const route = express.Router();
const conn = require("../config/dbconnection");

// search

route.get("/all", (req, res) => {
    console.log(req.params);
    conn.query("select *from message", (err, data) => {
        console.log(data);
        console.log(err);
        res.json(data);
    })
})

//login

route.post("/login",(req,res)=>{
    console.log(req.body);
   conn.query("select *from user where email=? And password=?",[req.body.email,req.body.password],(err,data)=>{
    console.log(data.length);
    if(data.length==0)
    {
        res.json({
            "error":"true",
            "message":"not autorized user"
        });

    }
    else
    {
        res.json({
            "error":"false",
            "message":"Success"
            
        });
    }
    console.log(err);
   })
})




// create 

route.post("/create", (req, res) => {
    console.log(req.body);

    // conn.query("insert into message (user_name,message) values (?,?)", [req.body.user_name,req.body.message], (err, data) => {
    conn.query("insert into message  values (?,?,?)", [req.body.user_name,new Date(),req.body.message], (err, data) => {
        if(err)// response jaruri h ye backend h res front ko jata h 
        {
            res.json({
                "error":"true",
                "message":"need to login!"
            });
        }
        else
        {
            res.json({
                "error":"false",
                "message":"sent!"
            });
        }
        console.log(data);
        console.log(err);
    });
});

//delete

route.delete("/delete", (req, res) => {
    console.log(req.body);
    conn.query("delete from user where email=?", [req.body.email], (err, data) => {
        if(err)// response jaruri h ye backend h res front ko jata h 
        {
            res.json({
                "error":"true",
                "message":"Action cancelled"
            });
        }
        else
        {
            res.json({
                "error":"false",
                "message":"Finished"
            });
        }
        console.log(data);
        console.log(err);
    })
})


// update password
route.put("/update/pass", (req, res) => {
    console.log(req.body);
    conn.query("update user set password=? where email=?", [req.body.password, req.body.email], (err, data) => {
        console.log(data);
        console.log(err);
    })
})


// update mobile
route.put("/update/mobile", (req, res) => {
    console.log(req.body);
    conn.query("update user set mobile=? where email=?", [req.body.mobile, req.body.email], (err, data) => {
        console.log(data);
        console.log(err);
    })
})

module.exports = route;