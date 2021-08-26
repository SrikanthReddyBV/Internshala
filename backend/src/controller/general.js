const get = (model) => async (req, res) => {
  try {
    const items = await model.find().populate().lean().exec();
    return res.send(items);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const getOne = (model) => async (req, res) => {
  try {
    const item = await model.findById(req.params.id).lean().exec();
    return res.send(item);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const post = (model) => async (req, res) => {
  try {
    const items = await model.create(req.body);
    return res.send(items);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const update = (model) => async (req, res) => {
  try {
    const items = await model
      .findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      })
      .lean()
      .exec();
    return res.send(items);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

const remove = (model) => async (req, res) => {
  try {
    const items = await model.findByIdAndDelete(req.params.id);
    return res.send(items);
  } catch (err) {
    return res.status(400).send(err.message);
  }
};

module.exports = (model) => {
  return {
    get: get(model),
    getOne: getOne(model),
    post: post(model),
    update: update(model),
    remove: remove(model),
  };
};
