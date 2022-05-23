const router = require("express").Router();



module.exports = (db) => {

    const types = require('./types');

    router.get('/', types(db));

    return router;

};




