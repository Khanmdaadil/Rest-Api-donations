const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Login = require('./routes/login');
const Signup = require('./routes/signup');
const Creators = require('./routes/creators');
const Donation = require('./routes/donation');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//mydatabase can be replaced by mongodb database name of projects
mongoose.connect('mongodb://localhost:27017/mydatabase', { useNewUrlParser: true });

app.use('/login', Login);
app.use('/signup', Signup);
app.use('/creators', Creators);
app.use('/donate', Donation);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
