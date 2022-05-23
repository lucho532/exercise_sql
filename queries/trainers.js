const { sql } = require("slonik");

const trainers = (db) => async () => {
  try {
    const result = await db.query(sql`
    SELECT leaders.name, badge, description, city
    FROM leaders
    INNER JOIN gyms
    ON gyms.leader_id = leaders.id
    `);
    console.log(result)
    return {
      ok: true,
      data : result.rows
      

    
  }
  } catch (error) {
    console.info('> error at "trainers" query from "books"');
    console.error(error.message);

    return {
      ok: false,
    };
  }
};

module.exports = {
    trainers,
};
