const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());

app.set('view engine', 'ejs');

let counter = 0;


app.get('/', (req, res) => {
  counter = counter + 1;
  res.render('pages/home', { counter: counter });
});

app.get('/data', (req, res) => {
  counter = counter + 1;
  res.send({
    counter: counter,
  });
});

app.get('/second-path', (req, res) => {
  res.send('Second path');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
