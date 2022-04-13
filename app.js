const express = require("express");
const router = require("./book/router");
const bodyParser = require("body-parser");
const PORT = 8000;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.json());

app.use("/book", router);

app.listen(PORT, () => {
  console.log(`The server now is runing in port ${PORT}`);
});
