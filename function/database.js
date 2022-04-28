require('dotenv').config();
const mysql = require('mysql');

var con = mysql.createPool({
	host: process.env.SQL_HOST,
	user: process.env.SQL_USER,
	password: process.env.SQL_PASSWORD,
	database: process.env.SQL_DATABASE
});

con.getConnection((err) => (err ? console.log('error sql') : console.log('connected sql')));

module.exports = con;
