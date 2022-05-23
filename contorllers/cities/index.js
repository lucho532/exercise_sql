const router = require("express").Router();

module.exports = (db) => {
  const cities = require("./cities");
  

  router.get("/", cities(db));
 

  return router;
};