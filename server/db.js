const Pool = require("pg").Pool;

const pool = new Pool({
	user: "postgres",
	password: "papa@8890",
	host: "localhost",
	port: 5432,
	database: "bookdict"
});

module.exports = pool;