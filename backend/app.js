const express = require('express');
const bodyParser = require('body-parser');

require("./database/config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

const postRoutes = require("./routes/posts");

// app.use((req,res,next)=>{
//     console.log("first middleware");
//     next();
// });

// app.use((req,res,next)=>{
//     res.send('hello from express the second middleware');
// });



app.use((req,res,next) =>{
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, PUT, OPTIONS");
    next();
});

app.use("/api/posts", postRoutes);

module.exports = app;