const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '141.94.50.209', // Replace with your DB host
  user: 'userdbds1',      // Replace with your DB user
  password: 'O$c@rm!kEJul101',      // Replace with your DB password
  database: 'dbds1' // Replace with your DB name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL database!');
});

module.exports = connection;
