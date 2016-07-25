const express = require('express');
const app = express();
app.use(express.static('dist'));
const blogPosts = require('./blogPosts.js');
app.get('/blogPosts', (req, res) => res.send(blogPosts) );
app.listen(3008, () => console.log('Example app listening on port 3008!') );