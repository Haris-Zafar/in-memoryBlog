const express = require('express');
const app = express();
const posts = require('./routes/posts');
const comments = require('./routes/comments');

app.use('/posts', posts);
app.use('/comments', comments);

// Only start the server if this file is run directly
if (process.env.NODE_ENV !== 'test') {
  const PORT = 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;
