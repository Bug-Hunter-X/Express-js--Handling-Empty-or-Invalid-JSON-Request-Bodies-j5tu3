const express = require('express');
const app = express();
app.use(express.json());
app.post('/user', (req, res) => {
  console.log(req.body);
  // ... further processing ...
});

//The bug is that if the incoming request body is empty or invalid JSON, it will cause an error