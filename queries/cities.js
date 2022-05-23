const { sql } = require("slonik");

const cities = (db) => async () => {
  try {
    const result = await db.query(sql`
    SELECT leaders.name AS entrenador, badge, pokemons.name AS pokemon, city
    FROM leaders
    INNER JOIN gyms
    ON gyms.leader_id = leaders.id
    INNER JOIN pokemons
    ON gyms.leader_id = pokemons.leader_id
    `);
    console.log(result)
    return {
      ok: true,
      data : result.rows
      

    
  }
  } catch (error) {
    console.info('> error at "cities" query from "books"');
    console.error(error.message);

    return {
      ok: false,
    };
  }
};

module.exports = {
  cities,
};
