const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

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

app.post('/api/posts',(req,res,next) => {
    const post = req.body;
    console.log(post);
    res.status(201).json({
        message: 'post added successfully'
    });
});

app.get('/api/posts', (req,res,next)=>{
    const posts = [
        {
            id: 'abc121',
            title: 'First server-side post',
            content: 'This is coming from server!'
        },
        {
            id: 'abc122',
            title: 'Second server-side post',
            content: 'This is coming from server!'
        },
        {
            id: 'abc123',
            title: 'Third server-side post',
            content: 'This is coming from server!'
        }
    ];
    res.status(200).json({
        message: 'post fetch successfully',
        posts: posts
    });
   
});

module.exports = app;