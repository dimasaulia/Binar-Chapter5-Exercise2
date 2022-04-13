const books = [];
class Book {
  constructor(params) {
    this.id = books.length + 1;
    this.title = params.title;
    this.author = params.author;
    this.price = params.price;
  }

  static create(params) {
    const book = new this(params);
    books.push(book);
    return book;
  }

  static find(id) {
    const book = books.find((i) => i.id === Number(id));
    if (!book) return null;
    return book;
  }

  static list() {
    return books;
  }
}

module.exports = Book;
