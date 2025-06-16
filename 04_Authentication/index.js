// Basic way of Authentication in Node js app

import express from "express";
import jwt from "jsonwebtoken"
const app = express();

app.use(express.json());

const users = [];
const JWT_SECRET= "USER_APP"

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  users.push({
    username,
    password,
  });

  res.json({
    message: "you have signed up",
  });
});



app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = users.find(
    (user) => user.username == username && user.password == password
  );
  if (existingUser) {
    const token = jwt.sign({
       username : existingUser.username 
    },JWT_SECRET);
    existingUser.token = token;

    res.send({
      token,
    });
    console.log(existingUser);
  } else {
    res.status(403).send({
      message: "invalid username or password",
    });
  }
});

// app.get("/me", (req, res) => {
//   const token = req.header.authorization;

//   const userDetail = jwt.verify(token, JWT_SECRET)
//   const username = userDetail.username

//   const user = user.find((user) => user.username == username);
//   if (user) {
//     res.send({
//       username: user.username,
//     });
//   } else {
//     res.status(401).send({
//       message: "unauthorized",
//     });
//   }
// });



// we will verify token now in auth middleware  not in /me endpoint

function auth(req,res,next){
  const token = req.headers.authorization

  if(token){
    jwt.verify(token , JWT_SECRET, (err, decoded)=>{
      if(err){
        res.status(401).send({
          message :"unauthorized"
        })
      }else{
        req.user = decoded;
        next()
      }

    })
  }else{
    res.status(401).send({
      message:"unauthorized "
    })
  }
}



app.get("/me", auth, (req, res) => {
  const loggedinUser = users.find(
    (user) => user.username === req.user.username
  );
  if (loggedinUser) {
    res.send({
      username: loggedinUser.username,
    });
  } else {
    res.status(401).send({
      message: "unauthorized",
    });
  }
});

app.listen(3000);
