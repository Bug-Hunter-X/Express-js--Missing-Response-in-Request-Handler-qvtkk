const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  // Missing res.send() or similar to send a response
  console.log('Request received');
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});