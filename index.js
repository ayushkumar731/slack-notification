const express = require('express');

const app = express();

const port = 3000;
const Slack = require('./slack');

app.use(express.urlencoded());
app.use(express.json());

app.post('/api/user/sign-up', (req, res) => {
  const { name, email } = req.body;
  const newUser = { name, email };
  Slack.sendSignsUpNotification(newUser);
  return res.json({
    success: true,
    user: newUser,
  })
});

app.listen(port, (err, res) => {
  if (err) {
    console.log(`error to fire up the server: ${err}`);
    return;
  }
  console.log(`server is running on port : ${port}`);
});

module.exports = app;