const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3030;

app.use(bodyParser.json());

const users = [
  {
    id: 0,
    name: "",
    age: "",
  }
];

app.use('/', (req, res, next) => {
  console.log('Request type:', req.methhod);
  next();
});

app.post('/users', (req, res) => {
  res.send(user[req.params.users])
})

app.get('/users', (req, res) => {
  res.send(users[req.params.user] + "");
});

app.get('/users/:id', (req, res) => {
  user[req.body.id] = userID;
  userId++
  res.send(userId + "");
});

app.get('/search?name=<query>', (req, res) => {
  res.send(name[req.query.user]);
})

app.delete('/users/:id', (req, res) => {
  
})

app.listen(PORT, err => {
  if (err) {
    console.log(`There was an error starting the server: $(err)`);
  } else {
    console.log(`App Listening on Port ${PORT}`);
  }
});