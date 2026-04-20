const express = require('express');
const lodash = require('lodash');
const minimatch = require('minimatch');

const app = express();

app.get('/', (req, res) => {
  const obj = lodash.cloneDeep({ message: 'Hello, DevSecOps!' });
  const pattern = minimatch('.js', '.js');
  res.send(`${obj.message} (Pattern match: ${pattern})`);
});

// Export a handler function for Vercel
module.exports = (req, res) => {
  app(req, res);
};
