const express = require('express');
const app = express();
const port = 6002;
var cors = require('cors')
app.use(cors());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, options');
    next();
  });

  app.get('/', (req,res) => {
    res.send("hello world");
  })
  app.use(express.json());
  require("./app/routes/routes.js")(app);
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});