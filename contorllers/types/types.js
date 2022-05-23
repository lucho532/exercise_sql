const {types} = require("../../queries/types");
const errors = require('../../errors')


module.exports = (db) => async (req, res, next)=>{
  const result = await types(db)()
 
  if(!result.ok){
      return  next(errors[400])
  }

  res.status(200).json({
    success: true,
    data: result.data

  
  })
};