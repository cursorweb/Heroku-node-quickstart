const express = require('express');
const path = require('path');

express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.sendFile(path.join(__dirname, "index.html")))
.listen(5000); // note: Server will be found on localhost:5000
