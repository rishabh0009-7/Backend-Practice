//HTTP requests to a server using APIs (the fetch API)
// import express from "express"
// import fetch from "node-fetch"

// const app = express()

// let postData = {}
// async function fetchData(){
//     try {
//         const response = await fetch(
//           "https://jsonplaceholder.typicode.com/posts/1"
//         );
//         const data = await response.json()
//          postData = data
//     } catch (error) {
//         console.log("error");
        
        
//     }

// }
// fetchData()


// app.get("/",(req,res)=>{
//     res.send(postData)
// })


// app.listen(3000,()=>{
//     console.log("server running");
    
// })




//creating an http server 


// import express from "express"
// const app = express()


// app.get('/add',(req,res)=>{
//     const a = Number (req.query.a);
//     const b = Number(req.query.b) ;

//     res.json({
//         ans: a+b
//     }
//     )

// })

// app.get("/multiply", (req, res) => {
//   const a = Number(req.query.a);
//   const b = Number(req.query.b);

//   res.json({
//     ans: a * b,
//   });
// });

// app.get("/divide", (req, res) => {
//   const a = Number(req.query.a);
//   const b = Number(req.query.b);

//   res.json({
//     ans: a / b,
//   });
// });

// app.get("/subtract", (req, res) => {
//   const a = Number(req.query.a);
//   const b = Number(req.query.b);
//   res.json({
//     ans: a - b,
//   });
// });

// app.listen(3000)






//middlewares
// import express from "express"
// const app = express()

// app.use(function(req,res,next){
//     console.log("request recieved ");
//     next()
    
// })


// app.get('/add',(req,res)=>{
//     const a = Number (req.query.a);
//     const b = Number(req.query.b) ;

//     res.json({
//         ans: a+b
//     }
//     )

// })
// app.listen(3000)


//route specific middleware 
// import express from "express"
// const app = express()

// function helloreq(req,res,next){
//     console.log("message received ");
//     next()
    

// }

// app.get('/hello',helloreq,(req,res)=>{
//     res.send("hello world")

// })

// app.listen(3000)



//commonly  used  middleware 
//express.json--> middleware to parse json bodies 


import express from "express"
const app = express()

app.use(express.json())

app.post('/data',(req,res)=>{
    const data = req.body
    console.log("received data ",data);

    res.send("data received ")

    


})


app.listen(3000);