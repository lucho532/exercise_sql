const {todosPokemons} = require("../../queries/pokemons");
const errors = require('../../errors')


module.exports = (db) => async (req, res, next)=>{
  const result = await todosPokemons(db)()
  if(!result.ok){
      return  next(errors[400])
  }
  res.status(200).json({
  
    success: true,
    data: result.data

  
  })
  console.log(result)
};


