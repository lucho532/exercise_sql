const router = require("express").Router();

module.exports = (db) => {
  const trainers = require("./trainers");
  

  router.get("/", trainers(db));
 

  return router;
};