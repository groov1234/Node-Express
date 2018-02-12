const express = require('express');
const bodyParser = require('body-parser');

const server = express();
const PORT = 3030;

server.use(bodyParser.json());

const users = [
  {
    id: 0,
    name: "",
    age: "",
  }
];

server.use('/', (req, res, next) => {
  console.log('Request type:', req.methhod);
  next();
});

server.post('/users', (req, res) => {
  res.send(user[req.params.users])
})

server.get('/users', (req, res) => {
  res.send(users[req.params.user] + "");
});

server.get('/users/:id', (req, res) => {
  user[req.body.id] = userID;
  userId++
  res.send(userId + "");
});

server.get('/search?name=<query>', (req, res) => {
  res.send(name[req.query.user]);
})

server.delete('/users/:id', (req, res) => {
  
})

server.listen(PORT, err => {
  if (err) {
    console.log(`There was an error starting the server: $(err)`);
  } else {
    console.log(`Server Listening on Port ${PORT}`);
  }
});