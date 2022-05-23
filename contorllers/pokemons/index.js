const router = require("express").Router();

module.exports = (db) => {
  const todosPokemons = require("./todosPokemons");
  

  router.get("/", todosPokemons(db));
 

  return router;
};