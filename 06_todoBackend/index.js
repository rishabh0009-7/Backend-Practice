import express, { json } from"express"
import{UserModel , TodoModel} from "./db.js"
import jwt from "jsonwebtoken"
import {auth, JWT_SECRET} from "./auth.js"

import mongoose from "mongoose"




const app = express()


app.use(express.json())


app.post('/signup', async function(req,res){

   const {name, email , password } = req.body
try {

    const existingUser = await UserModel.findOne({email})

    if(existingUser){
        res.status(400).json({
            message :"user already existed "
        })

    }
    await UserModel.create({
      email: email,
      name: name,
      password: password,
    });

    res.json({
      message: "you are signed up",
    });


    
} catch (error) {
    res.status(500).json({
        message:"signup failed "
    })
    
}
    
})



app.post("/signin", async function (req,res) {
   const {email, password} = req.body

try {
    const existingUser = await UserModel.findOne({
      email: email,
      password: password,
    });


    if(!existingUser){
        return res.json({
            message :"user not found "
        })

    }

    
      const Token = jwt.sign(
        {
          id: existingUser._id.toString(),
        },
        JWT_SECRET
      );

      res.json({
        Token,
      });
    

    
} catch (error) {
    res.status(500).json({
        message :"signin failed "
    })
    
}
    



});


app.post("/todo", function (req,res) {
    const {}= req.body
});


app.post("/todos", function (req,res) {});

app.listen(3000,()=>{
    console.log("server running");
    
})