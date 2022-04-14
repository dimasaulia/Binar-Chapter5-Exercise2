const categorys = [];

class Category {
  constructor(params) {
    this.id = categorys.length + 1;
    this.name = params.name;
  }

  static add(params) {
    const category = new this(params);
    categorys.push(category);
    return category;
  }

  static list() {
    return categorys;
  }

  static find(name) {
    const category = categorys.find((c) => c.name === name);
    if (!category) return null;
    return category;
  }

  static destroy(name) {
    const findArr = this.find(name);
    if (!findArr) return null;

    const id = categorys.indexOf(findArr);
    categorys.splice(id, 1);
    return categorys;
  }

  static update(params) {
    const findArr = this.find(params.search);
    if (!findArr) return null;

    const id = categorys.indexOf(findArr);
    findArr.name = params.name;
    categorys.splice(id, 1, findArr);
    return categorys;
  }
}

module.exports = Category;
