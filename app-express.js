const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const indexRouter = require('./routes/index');
const requestsRouter = require('./routes/requests');
const answersRouter = require('./routes/answers');
const answerSizeRouter = require('./routes/answerSize');
const requestsPerMinuteRouter = require('./routes/requestsPerMinute');

const app = express();

app.use('/static', express.static(path.join(__dirname, 'client/build/static')));
app.use('/', indexRouter);
app.use('/requests', requestsRouter);
app.use('/answers', answersRouter);
app.use('/short-answers', answerSizeRouter);
app.use('/requests-per-min', requestsPerMinuteRouter);

app.listen(5000);