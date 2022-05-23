const express = require("express");
const { DEV_PORT } = require("./constants");
const db = require("./configs/db");
const app = express();
const controllers = require('./contorllers')
const errors =require('./errors')

app.use(express.json());


app.use("/",  controllers(db) );




app.use((req, res, next) => {
  next(errors[404]);
});

app.use(({ statusCode, error }, req, res, next) => {
  res.status(statusCode).json({
    success: false,
    message: error.message,
  });
});


app.listen(process.env.PORT || DEV_PORT, () => {
  console.info(`> listening at: ${process.env.PORT || DEV_PORT}`);
});