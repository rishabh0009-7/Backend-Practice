import express, { json } from"express"
import{UserModel , TodoModel} from db.js
import { TbCookieMan } from "react-icons/tb"


const app = express()


app.use(express.json())

const JWT_SECRET = "S3CRET "

app.post('/signup', async function(){

    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;


    await UserModel.create ({
        email:email,
        name :name ,
        password:password 


    }) 

    res.json({
        message :"you are signed up"
    })


})



app.post("/signin", function () {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;


    const existingUser= UserModel.findOne({
        email:email,
        password:password 

    })

    if(existingUser){
        const Token = jwt.sign({
            id:response._id.tostring()

        }, JWT_SECRET)

        res.json({
            Token
        })
    }else{
        res.status(401).json({
            message :
            "inocrrect credentials "

        })
        
    }




});


app.post("/todo", function () {});


app.post("/todos", function () {});