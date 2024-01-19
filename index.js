require('dotenv').config()
const express = require('express')
const app = express();
// const port = 3000;

app.get('/',(req,res) => {
   res.send('Hello Siddhi');
})
app.listen(process.env.PORT,() => {
    console.log(`express is working on port ${process.env.PORT}`);
})