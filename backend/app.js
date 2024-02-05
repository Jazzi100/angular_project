const express = require('express');
const bodyParser = require('body-parser');

require("./database/config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


const Post = require('./models/post');

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

// save data in a array
// app.post('/api/posts',(req,res,next) => {
//     const post = req.body;
//     console.log(post);
//     res.status(201).json({
//         message: 'post added successfully'
//     });
// });

// save data in a mongodb
app.post('/api/posts',(req,res,next) => {
    console.log("Req Body : " + req.body.description);
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });
    console.log("server mein post api : " + post);
    post.save();
    console.log(post);
    res.status(201).json({
        message: 'post added successfully'
    });
});

app.get('/api/posts', (req,res,next)=>{
    // const posts = [
    //     {
    //         id: 'abc121',
    //         title: 'First server-side post',
    //         content: 'This is coming from server!'
    //     },
    //     {
    //         id: 'abc122',
    //         title: 'Second server-side post',
    //         content: 'This is coming from server!'
    //     },
    //     {
    //         id: 'abc123',
    //         title: 'Third server-side post',
    //         content: 'This is coming from server!'
    //     }
    // ];
    Post.find().then(result => {
        console.log(result);
        res.status(200).json({
            message: 'post fetch successfully',
            posts: result
        });
    });
    
   
});


app.delete('/api/posts/:id', (req,res,next) => {
    console.log(req.params.id);
    Post.deleteOne({
        _id: req.params.id
    }).then(result => {
        console.log(result);
        res.status(200).json({message: "post deleted!..."})
    });
    
})

module.exports = app;