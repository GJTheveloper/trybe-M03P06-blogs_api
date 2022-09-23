const userService = require('../services/userService');
const generateToken = require('../generateJWT');

const create = async (req, res) => {
  const { displayName, email, password, image } = req.body;

  const newUser = await userService.create(displayName, email, password, image);

  delete newUser.dataValues.password;

  const token = generateToken(newUser.dataValues);

  res.status(201).json({ token });
};

const getAll = async (req, res) => {
  const users = await userService.getAll();

  res.status(200).json(users);
};

const getById = async (req, res) => {
  const { id } = req.params;

  const user = await userService.getById(id);

  res.status(200).json(user);
};

module.exports = {
  create,
  getAll,
  getById,
};
