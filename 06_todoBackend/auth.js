import jwt from "jsonwebtoken"
const JWT_SECRET = "S3CRET"


function auth(req,res,next){
    const Token  = req.headers.authorization;

    const response = jwt.verify(Token, JWT_SECRET)

    if(response){
        req.userId = Token.userId
        next()
    }else{
        res.status(401).json({
            message :"incoorect credential "
        })
    }




    module .exports= {
        auth ,
        JWT_SECRET

    }





}