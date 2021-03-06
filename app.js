const express = require('express');
const app = express();
const port = 8080;
var os = require("os");
var hostname = os.hostname();

app.get('/', (req, res) => {
  res.send('<h1>Auto Scaling Demo App</h1> <h4>Message: Success</h4> <p>Version: 1.0.0</p>' + hostname);
})

app.listen(port, () => {
  console.log(`Demo app is up and listening to port ${port}`);
})
