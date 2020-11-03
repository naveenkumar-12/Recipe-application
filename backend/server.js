const express = require("express");
const mysql=require("mysql");
const dotenv=require("dotenv");
const bodyparser = require('body-parser');


dotenv.config({path:'./.env'});

const app =express();
app.use(bodyparser.json());

const db =mysql.createConnection({
    host:process.env.DATABASE_HOST,
    user:process.env.DATABASE_USER,
    password:process.env.DATABASE_PASSWORD,
    database:process.env.DATABASE,
});

app.post("/register",(req,res)=>{
    const {name,email,password}=req.body;
    console.log(name,email,password)
    db.query("SELECT * FROM users WHERE email=?",[email],async(error,result)=>{
        console.log(result)
        if(!result[0]){
            db.query("INSERT INTO users SET ?",{name:name,email:email,password:password,search:""})
            res.send("created")
        }
        else{
            console.log("DUP")
            res.send("dup")
        }
    })
    
     
});


app.post("/login",(req,res)=>{
    const {email,password}=req.body;
    db.query("SELECT * FROM users WHERE email=?",[email],async(error,result)=>{
            if(!result[0] || result[0].password!==password){
            res.send("email or password is wrong")
            }
            else{
                res.send(result[0])
            }
        })
});
app.post("/admin",(req,res)=>{
    db.query("SELECT name,email,search FROM users WHERE email!='naveenmuruganatham12@gmail.com'",async(error,result)=>{
        console.log(JSON.stringify(result))
        res.send(JSON.stringify(result))
    })
})
app.post("/searchdata",(req,res)=>{
    const mail=req.body.mail;
    const search1=req.body.search;
    console.log(search1)
    db.query("UPDATE users set search = CONCAT(search,',',?) WHERE email=?",[search1,mail],async(error,result)=>{
            console.log(result)
        
    })

})



app.listen(5005,()=>{
    console.log("Server begin")
})