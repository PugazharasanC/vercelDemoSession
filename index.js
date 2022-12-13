const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config()

const port = process.env.PORT || 8080;

app.listen(port,() =>{
    console.log(`app listening ${port}`)
})

app.get("/:name",(req,res)=>{
    const name = req.params.name
    res.send("Hey Buddy "+name);
})