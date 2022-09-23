const blogPostService = require('../services/blogPostService');

const getAll = async (req, res) => {
  const blogPost = await blogPostService.getAll();

  res.status(200).json(blogPost);
};

module.exports = {
  getAll,
};
