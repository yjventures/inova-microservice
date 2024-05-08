const express = require('express');
const cors = require('cors');
require("dotenv").config();

// import route files as needed
const pdRoutes = require('./routes/pdRoutes');
const indexRoutes = require('./routes/indexRoutes');


// initialize
const app = express();

// use cross-origin
app.use(cors());

// parse JSON body
app.use(express.json());

//logger middleware
app.use((req,res,next) =>{
    req.time = new Date(Date.now()).toString();
    res.on("finish", function() {
        console.log(req.method,req.hostname, req.path, res.statusCode, res.statusMessage, req.time,);
    });
    next();
  });

  //set up routes to use
  app.use('/',pdRoutes);
  app.use('/',indexRoutes);

  //default error handler 
  app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something went wrong!');
  });

//   configure port
const PORT = process.env.PORT || 3000;

// start the server
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
