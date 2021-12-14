const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('Authentication service started on port 3000');
});

const users = [
  {
      username: 'terra',
      password: 'password123admin',
      role: 'admin'
  }, {
      username: 'dave',
      password: 'password123member',
      role: 'member'
  }
];