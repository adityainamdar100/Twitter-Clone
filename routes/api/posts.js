const express = require('express');
const router = express.Router();
const Post = require('../../models/post');
const { isLoggedIn } = require('../../middleware')


router.get('/api/post', isLoggedIn, async (req, res) => {
    const post = await Post.find({});
    res.json(post);
});

router.post('/api/post', isLoggedIn, async (req, res) => {

    const post = {
        content: req.body.content,
        postedBy: req.user.username
    }

    const newPost = await Post.create(post);

    res.json(newPost);
});


module.exports = router;