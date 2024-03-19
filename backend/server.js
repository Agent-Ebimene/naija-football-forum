const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const app = express();

app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "naija_football-forum",
});

db.connect((err) => {
  if (err) throw err;
  console.log("Connected!");
  var sql =
    "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
  db.query(sql, (err, data) => {
    if (err) throw err;
    console.log("Table Created Successfully!!");
  });
});

app.get("/", (req, res) => {
  return res.json("Sent from the backend");
});
app.get("/users", (req, res) => {
  const sql = "SELECT * from users";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8000, () => {
  console.log("Listening at port 8000...");
});
