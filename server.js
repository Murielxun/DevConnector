const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('API Running');
});

app.listen(PORT, () => {
  `Server started o0n port ${PORT}`;
});
