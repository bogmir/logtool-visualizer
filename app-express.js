const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const indexRouter = require('./routes/index');
const requestsRouter = require('./routes/requests');
const answersRouter = require('./routes/answers');
const answerSizeRouter = require('./routes/answerSize');
const requestsPerMinuteRouter = require('./routes/requestsPerMinute');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', indexRouter);
app.use('/requests', requestsRouter);
app.use('/answers', answersRouter);
app.use('/answerSize', answerSizeRouter);
app.use('/requestsPerMinute', requestsPerMinuteRouter);

app.listen(5000);