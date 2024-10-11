const express = require('express');
const router = express.Router();
let blogData = require('./data');

// Get comments
router.get('/:postId', (req, res) => {
    const postId = parseInt(req.params.postId);
    const post = blogData.posts.find(p => p.id === postId);
    if (post) {
        res.json(post.comments);
    } else {
        res.status(404).send("Post not found");
    }
});

// Add comment
router.post('/:postId', (req, res) => {
    const postId = parseInt(req.params.postId);
    const post = blogData.posts.find(p => p.id === postId);
    if (post) {
        const { text } = req.body;
        const newComment = {
            id: post.comments.length + 1,
            text
        };
        post.comments.push(newComment);
        res.status(201).json(newComment);
    } else {
        res.status(404).send("Post not found");
    }
});

// Update comment
router.put('/:postId/:commentId', (req, res) => {
    const postId = parseInt(req.params.postId);
    const commentId = parseInt(req.params.commentId);
    const post = blogData.posts.find(p => p.id === postId);
    if (post) {
        const comment = post.comments.find(c => c.id === commentId);
        if (comment) {
            comment.text = req.body.text || comment.text;
            res.json(comment);
        } else {
            res.status(404).send("Comment not found");
        }
    } else {
        res.status(404).send("Post not found");
    }
});

// Delete comment
router.delete('/:postId/:commentId', (req, res) => {
    const postId = parseInt(req.params.postId);
    const commentId = parseInt(req.params.commentId);
    const post = blogData.posts.find(p => p.id === postId);
    if (post) {
        const index = post.comments.findIndex(c => c.id === commentId);
        if (index !== -1) {
            post.comments.splice(index, 1);
            res.status(204).send();
        } else {
            res.status(404).send("Comment not found");
        }
    } else {
        res.status(404).send("Post not found");
    }
});

module.exports = router;
