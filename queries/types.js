const { sql } = require("slonik");

const types = (db) => async () => {
  try {
    const result = await db.query(sql`
    SELECT elements.name AS types
    FROM elements
    `);
    console.log(result)
    return {
      ok: true,
      data : result.rows
      

    
  }
  } catch (error) {
    console.info('> error at "types" query from "books"');
    console.error(error.message);

    return {
      ok: false,
    };
  }
};

module.exports = {
    types,
};