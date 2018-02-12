const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const server = express();
const PORT = 3030;

const users = [
  {
    id: 0,
    name: "Calum",
    age: "30",
  },
  {
    id: 1,
    name: "Joseph",
    age: "32",
  },
  {
    id: 2,
    name: "Bart",
    age: "45",
  },
];

server.use(bodyParser.json());

server.use(cors());

server.get('/users', (req, res) => {
  res.send(users);
});

server.post('/users', (req, res) => {
  users.push(req.body);
  res.send(users);
})



server.get('/users/:id', (req, res) => {
  const { id } = req.params;
  console.log('id ->', id);
  const { name } = req.body;
  console.log('name ->', name);
  const users = users.filter(user => {
    return user.id !== id;
  });
  const foundUser = users.find(findUserById);
  if (!foundUser) {
    res.json({ error: 'User not found by that id' });
  } else {
    res.json(foundUser);
  }
});

// server.get('/search?name=<query>', (req, res) => {
//   res.send();
// })

server.delete('/users/:id', (req, res) => {
  const id = req.body.id;
  users.splice(id, 1);
  res.send(users);
})

server.listen(PORT, err => {
  if (err) {
    console.log(`There was an error starting the server: $(err)`);
  } else {
    console.log(`Server Listening on Port ${PORT}`);
  }
});