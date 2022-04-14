const kategori = require("../Model/modelKategori");

const toJSON = (arg) => JSON.parse(JSON.stringify(arg));

exports.add = (req, res) => {
  const data = toJSON(req.body);
  kategori.add(data);
  res.status(201).json(data);
};

exports.list = (req, res) => {
  const data = kategori.list();
  res.status(201).json(data);
};

exports.destroy = (req, res) => {
  const name = req.query.name;
  const data = kategori.destroy(name);
  if (!data)
    return res.status(404).json({ error: "Can't Delete! Category Not Found" });
  res.status(202).send(data);
};

exports.find = (req, res) => {
  const data = kategori.find(req.params.name);
  if (!data) return res.status(404).json({ error: "Category Not Found" });
  res.status(200).send(data);
};

exports.update = (req, res) => {
  const data = kategori.update(toJSON(req.body));
  if (!data)
    return res.status(404).json({ error: "Can't Update, Category Not Found" });
  res.status(200).json(data);
};
