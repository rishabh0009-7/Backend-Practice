import  express from "express"
const app = express()

app.use(express.json())

const user = [];

app.post("/signup", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  user.push({
    username,
    password,
  });

  res.json({
    message: "you have signed up",
  });
});

const JWT_SECRET = "USER_APP"
app.post("/signin", (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = user.find(
    (user) => user.username == username && user.password == password
  );
  if (user) {
    const token = jwt.sign({
        username:user.username

    },JWT_SECRET);
    user.token = token 

    res.send({
      token,
    });
    console.log(user);
  } else {
    res.status(403).send({
      message: "invalid username or password",
    });
  }
});

app.get("/me", (req, res) => {
  const token = req.header.authorization;

  

  const user = user.find((user) => user.token === token);
  if (user) {
    res.send({
      username: user.username,
    });
  } else {
    res.status(401).send({
      message: "unauthorized",
    });
  }
});

app.listen(3000);
  



