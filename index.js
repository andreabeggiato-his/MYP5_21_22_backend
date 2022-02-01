const express = require('express');
const cors = require('cors');
const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.set('view engine', 'ejs');

let counter = 0;

const correctEmail = 'andrea.beggiato@h-is.com';
const correctPassword = 'password!!!';


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

app.post('/login', (req, res) => {
  console.log(req.body);
  const email = req.body.email;
  const password = req.body.password;
  if (email === correctEmail && password === correctPassword) {
    // res.send({
    //   success: true,
    // });
  }
  else {
    // res.send(404, 'User not found');
  }
});

app.get('/second-path', (req, res) => {
  res.send('Second path');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
