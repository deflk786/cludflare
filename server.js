const express = require('express');
const indexRouter = require('./routes/index');
const homeRouter = require('./routes/home');

const app = express();
const PORT = process.env.PORT || 3002;

// Middleware for routes
app.use('/', indexRouter);
app.use('/home', homeRouter);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
