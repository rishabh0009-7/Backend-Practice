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


// import express from "express"
// const app = express()

// app.use(express.json())

// app.post('/data',(req,res)=>{
//     const data = req.body
//     console.log("received data ",data);

//     res.send("data received ")

    


// })


// app.listen(3000);



//🔒 What is CORS?
// CORS stands for Cross-Origin Resource Sharing.

// It’s like a security gate set by a website to control who is allowed to access its data from a different domain.

// 🧠 Imagine this:
// You’re on website A (https://myfrontend.com) and you want to fetch data from website B (https://myapi.com).

// Even if you write code to do that, your browser will first ask:

// “Hey myapi.com, is it okay if myfrontend.com accesses your data?”

// If myapi.com replies yes (with CORS headers) → the browser allows it.

// If no or nothing → the browser blocks the request, even if the server sends back data.

// 🤔 Why is CORS needed?
// Because without CORS, any website could:

// Secretly talk to other websites using your credentials (cookies, tokens).

// Steal sensitive information (like bank account data) without you knowing.

// So CORS protects you by stopping unauthorized cross-site requests.



import express from "express"
import cors from "cors"
const app = express()


app.use(cors())

app.get('/sum',(req,res)=>{
    console.log(req.name);
    const a = parseInt(req.query.a)
    const b = parseInt(req.query.b)

    res.json({
        ans:a+b
    })

    

})
app.listen(3000)
