const express = require('express');

const router = express.Router();

const Post = require('../models/post');

router.post('',(req,res,next) => {
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

router.get('', (req,res,next)=>{
    Post.find().then(result => {
        console.log(result);
        res.status(200).json({
            message: 'post fetch successfully',
            posts: result
        });
    });
    
   
});


router.delete('/:id', (req,res,next) => {
    console.log(req.params.id);
    Post.deleteOne({
        _id: req.params.id
    }).then(result => {
        console.log(result);
        res.status(200).json({message: "post deleted!..."})
    });
    
})

router.put('/:id', (req, res, next) => {
    const post = new Post({
        _id: req.params.id,
        title: req.body.title,
        description: req.body.description
    });
    Post.updateOne({_id: req.params.id}, post).then(result => {
        res.status(200).json({message: 'updated successfully!...'});
    });
})

module.exports = router;