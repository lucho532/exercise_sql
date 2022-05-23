const router = require("express").Router();

module.exports = (db) => {
  const pokemonsControllers = require("./pokemons");
  const trainers = require('./trainers')
  const cities = require("./cities")
  const types = require('./types')

  router.use("/pokemons", pokemonsControllers(db));
  router.use("/trainers", trainers(db));
  router.use("/cities", cities(db));
  router.use("/types", types(db));
  

  return router;
};
