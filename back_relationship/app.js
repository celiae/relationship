const express = require("express");
const app = express();
const port = 3000;

const networkRouter = require("./routes/network");
const familyRouter = require("./routes/family");

app.use("/network", networkRouter);
app.use("/family", familyRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
