const express = require('express');
const app = express();
const posts = require('./posts');
const comments = require('./comments');

app.use(express.json());

app.use('/posts', posts);
app.use('/comments', comments);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
