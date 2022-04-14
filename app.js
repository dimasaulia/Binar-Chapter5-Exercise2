const express = require("express");
require("dotenv").config();

const app = express();
const router = require("./router");
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`SERVER WORK ON PORT ${PORT}`);
});
