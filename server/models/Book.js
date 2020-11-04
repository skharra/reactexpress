const Sequelize = require('sequelize');
const pool = require('../db.js');

const Book = pool.define('book', {
	name: {
		type: Sequelize.STRING
	},
	author: {
		type: Sequelize.STRING
	},
	summary: {
		type: Sequelize.STRING
	}
});

Book.sync().then(() => {
	console.log('table created')
});

module.exports = Book;