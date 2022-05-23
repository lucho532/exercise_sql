const { sql } = require("slonik");

const todosPokemons = (db) => async () => {
  try {
    const result = await db.query(sql`
    SELECT pokemons.id AS id, pokemons.name, json_agg(elements.name) AS types
    FROM pokemons
    INNER JOIN pokemons_elements
    ON pokemons_elements.pokemon_id = pokemons.id
    INNER JOIN elements
    ON elements.id = pokemons_elements.element_id
    GROUP BY pokemons.id, pokemons.name
    `);


    console.log(result)
    return {
      ok: true,
     data : result.rows
      
      

    
  }
  } catch (error) {
    console.info('> error at "todosPokemons" query from "books"');
    console.error(error.message);

    return {
      ok: false,
    };
  }
};

module.exports = {
  todosPokemons,
};
