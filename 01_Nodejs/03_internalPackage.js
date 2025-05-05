// internal packages

import fs from "fs "
import path from "path"

const filePath = path.join(__dirname,'a.txt')

fs.readfile(filePath,'utf-8',(err,data)=>{
    if(err){
        console.log(err);
        
    }
    else{
        console.log(data);
        
    }

})