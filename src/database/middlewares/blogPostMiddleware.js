const erro = { status: 400, message: 'Some required fields are missing' };

const titleExist = (title) => !title;
const contentExist = (content) => !content;

const verifyDataUpdated = (title, content) => {
  if (titleExist(title)) throw erro;
  if (contentExist(content)) throw erro;
};

const validateUpdated = (req, res, next) => {
  try {
    const { title, content } = req.body;
    verifyDataUpdated(title, content);
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validateUpdated,
};
