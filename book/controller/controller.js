const Book = require("../model/model");

exports.index = (req, res) => {
  res.send("This Site IS WORK");
};

exports.createBook = (req, res) => {
  const book = Book.create(req.body);
  res.status(201).json(book);
};

exports.list = (req, res) => {
  res.status(200).json(Book.list());
};
