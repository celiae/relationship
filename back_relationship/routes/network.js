const express = require("express");
const router = express.Router();

// router.get("/networklength", (req, res) => {
//   res.send("get networklength!");
// });

router
  .route("/")
  .get((req, res) => {
    res.send("get network!");
  })
  .post((req, res) => {
    res.send("post network");
  });

router
  .route("/:id")
  .get((req, res) => {
    res.send(`get network! ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`put network ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`delete network  ${req.params.id}`);
  });

module.exports = router;
