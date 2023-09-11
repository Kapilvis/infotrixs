const express = require("express");
const route = express.Router();
const conn = require("../config/dbconnection");

// search

route.get("/all", (req, res) => {
    console.log(req.params);
    conn.query("select *from user ", (err, data) => {
        console.log(data);
        console.log(err);
    })
})

//login

route.post("/login",(req,res)=>{
    console.log(req.body);
   conn.query("select *from user where user=? And password=?",[req.body.user,req.body.password],(err,data)=>{
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

    conn.query("insert into user values (?,?,?,?,?)", [null,req.body.mail,req.body.name,req.body.password, req.body.user], (err, data) => {
        if(err)// response jaruri h ye backend h res front ko jata h 
        {
            res.json({
                "error":"true",
                "message":"email already register"
            });
        }
        else
        {
            res.json({
                "error":"false",
                "message":"register"
            });
        }
        console.log(data);
        console.log(err);
    });
});

//delete

route.delete("/delete", (req, res) => {
    console.log(req.body);
    conn.query("delete from user where mail=?", [req.body.mail], (err, data) => {
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
    conn.query("update user set password=? where mail=?", [req.body.password, req.body.mail], (err, data) => {
        console.log(data);
        console.log(err);
    })
})


// update mobile
// route.put("/update/mobile", (req, res) => {
//     console.log(req.body);
//     conn.query("update user set mobile=? where mail=?", [req.body.mobile, req.body.mail], (err, data) => {
//         console.log(data);
//         console.log(err);
//     })
// })

module.exports = route;