// very basic express code 
import express from 'express'
const app = express()

app.get('/', (req,res)=>{
    res.send("hello")
    
})
app.listen(3000)
