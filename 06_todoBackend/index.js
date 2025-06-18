import express from "express"
import jwt from jsonwebtoken
const JWT_SECRET = "TODO-APP"
const {UserModel, TodoModel}= require('./db')
const {auth, JWT_SECRET}= require('./auth')
const app = express()

app.use(express.json())


app.post('/signup',async(req,res)=>{
    const email = req.body.email;
    const name = req.body.name;
    const  password = req.body.password


    await UserModel.create({
        email:email,
        password:password,
        name:name


    })

    res.json({
        message:"you are signed up"
    })


})

app.post("/login",async (req, res) => {
    const email = req.body.email;
    const name = req.body.name;
    const password = req.body.password;

   const response =  await UserModel.findOne({
    email:email,
    password:password,
   })

   if(response){
    const token = jwt.sign({
        id:response._id.toString()

    })

    res.json({
        token
    })

   }else{
    res.status(401).json({
        messsage:"incorrect creds"
    })
   }



});



app.post("/todo", (req, res) => {});

app.get("/todos", (req, res) => {});

app.listen(3000)