const express = require('express');
const lodash = require('lodash');
const minimatch = require('minimatch');

const app = express();

app.get('/', (req, res) => {
  const obj = { message: 'Hello, DevSecOps STUDENTS!' };
  const pattern = minimatch('app.js', '*.js');
  res.send(`${obj.message} (Pattern match: ${pattern})`);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});

// Export a handler function for Vercel
module.exports = (req, res) => {
  app(req, res);
};
