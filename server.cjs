// bring in all dependencies
require('dotenv').config();
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');

// define variables
const PORT = process.env.PORT || 3001;

// Connect to the database
require('./config/database.cjs');

// create my app
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));

app.use(require('./config/checkToken.cjs'));

// Put API routes here, before the "catch all" route
app.use('/api/users', require('./routes/api/users.cjs'));

// Protect the API routes below from anonymous users
const ensureLoggedIn = require('./config/ensureLoggedIn.cjs');

// Put API routes here, before the "catch all" routes
app.get('/api/test', (req, res) => {
    res.send('You just hit a API route');
  });

app.use('/api/users', require('./routes/api/users.cjs'));
app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));

});
app.listen(PORT, function () {
    console.log(`Express app running on port: ${PORT}`);
})