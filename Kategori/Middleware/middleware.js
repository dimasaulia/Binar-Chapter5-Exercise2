exports.requiareBodyName = (req, res, next) => {
  if (req.body.name) next();
  return res.status(400).json({ error: "Need (name) in body parameter" });
};

exports.requiareQueryName = (req, res, next) => {
  if (req.query.name) next();
  return res.status(400).json({ error: "Need (name) in query" });
};

exports.updateRequirement = (req, res, next) => {
  if (req.body.name && req.body.search) next();
  return res.status(400).json({ error: "Need (name, search) in body" });
};
