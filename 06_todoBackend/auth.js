import jwt from "jsonwebtoken"
const JWT_SECRET = "S3CRET"


function auth(req,res,next){
    const authHeader = req.headers.authorization;

    if(!authHeader || !authHeader.startsWith("Bearer ")){
        res.status(401).json({
            message :"unauthorized:no token provided "
        })
    }

   
    const token = authHeader.split(" ")[1];


    try {

        const decoded = jwt.verify(token , JWT_SECRET)

        req.userId = decoded.id
        next()
        
    } catch (error) {
        res.status(401).json({
            message :"invalid token"
        })
        
    }

}

export {
    auth,
    JWT_SECRET
}