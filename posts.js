const express = require('express');
const router = express.Router();
let blogData = require('./data'); 

// Get posts
router.get('/', (req, res) => {
    res.json(blogData.posts);
});

// Add post
router.post('/', (req, res) => {
    const { title, content } = req.body;
    const newPost = {
        id: blogData.posts.length + 1,
        title,
        content,
        comments: []
    };
    blogData.posts.push(newPost);
    res.status(201).json(newPost);
});

// Update post
router.put('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;
    const post = blogData.posts.find(p => p.id === postId);
    if (post) {
        post.title = title || post.title;
        post.content = content || post.content;
        res.json(post);
    } else {
        res.status(404).send("Post not found");
    }
});

// Delete post
router.delete('/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const index = blogData.posts.findIndex(p => p.id === postId);
    if (index !== -1) {
        blogData.posts.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send("Post not found");
    }
});

module.exports = router;
