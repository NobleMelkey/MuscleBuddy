const {dbConnect, Pool} = require('pg')
const db = new Pool({
    user: "postgres",
    host: "127.0.0.1",
    password: "Noble160301",
    port:5432,
    database:"fitness"
});

module.exports = db;
