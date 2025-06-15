// //very basic  js program to test node js
// let Firstname = "rishab"
// console.log(Firstname);

//installing external library
// import chalk from "chalk";

// console.log(chalk.blue("hello"));

//using internal library -> file system

const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "a.txt");

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
