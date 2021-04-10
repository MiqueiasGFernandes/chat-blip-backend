const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.disabled('x-powered-by');
app.use(cors());
app.use(bodyParser.json());

app.listen(() => {
  console.log('App started...');
}, 3000);
