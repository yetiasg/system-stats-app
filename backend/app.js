const express = require('express');
const morgan = require('morgan');

const config = require('./config');

const app = express();
app.use(express.json());
app.use(morgan('dev'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

const dataRouter = require('./router/router');
app.use(dataRouter);

app.use((req, res, next) => {
  res.status(404).json({message: 'This route does not exist'});
});

app.use((err, req, res, next) =>{
  res.status(err.status).json({
    error: {
      message: err.message,
      status: err.status || 500
    }
  });
});

app.listen(config.server.PORT, () => {
  console.log(`listening on port: ${config.server.PORT}`)
});