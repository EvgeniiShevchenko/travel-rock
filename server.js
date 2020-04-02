const express = require('express');
const path = require('path');

const port = parseInt(process.env.PORT, 10) || 3000;

const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
  });
}

app.listen(port, () => console.log(`Server start on ${port} port!`));
