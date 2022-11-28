const express = require("express");
const router = express.Router();
const connection = require("../db");

router
  .route("/")
  .get((req, res) => {
    connection.query("SELECT * FROM family", (err, rows) => {
      if (err) {
        console.log(err);
      } else {
        res.json(rows);
        console.log(rows);
      }
    });
  })
  .post((req, res) => {
    console.log(req.body);
    res.send("post family");
  });

router
  .route("/:id")
  .get((req, res) => {
    res.send(`get family! ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`put family ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete family ${req.params.id}`);
  });

module.exports = router;
