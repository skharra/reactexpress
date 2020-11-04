// const Pool = require("pg").Pool;
const Sequelize = require('sequelize');
// const dotenv = require('dotenv');

// dotenv.config();


const pool = new Sequelize("bookdict", "postgres", "papa@8890", {
	host: 'localhost',
	port: 5432,
	dialect: 'postgres',
	
	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
});
// const pool = new Pool({
// 	user: "postgres",
// 	password: "papa@8890",
// 	host: "localhost",
// 	port: 5432,
// 	database: "bookdict"
// });

module.exports = pool;