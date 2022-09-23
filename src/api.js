const express = require('express');

const blogPostRouter = require('./database/routes/blogPost');
const categoriesRouter = require('./database/routes/categories');
const loginRouter = require('./database/routes/login');
const userRouter = require('./database/routes/user');
const erroMiddleware = require('./database/middlewares/errorMiddleware');

const app = express();

app.use(express.json());

app.use('/post', blogPostRouter);
app.use('/categories', categoriesRouter);
app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use(erroMiddleware);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
