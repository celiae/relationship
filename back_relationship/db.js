const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "celiae",
  password: "z",
  database: "relationship",
});

connection.connect((err) => {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
