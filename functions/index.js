const functions = require('firebase-functions');
const admin = require('firebase-admin');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const indexRouter = require('../routes/index');
const requestsRouter = require('../routes/requests');
const answersRouter = require('../routes/answers');
const answerSizeRouter = require('../routes/answerSize');
const requestsPerMinuteRouter = require('../routes/requestsPerMinute');

const app = express();


app.use(cors({ origin: true }));
app.get('/hello-world', (req, res) => {
  return res.status(200).send('Hello World!');
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use('/', indexRouter);
app.use('/requests', requestsRouter);
app.use('/answers', answersRouter);
app.use('/shortAnswers', answerSizeRouter);
app.use('/requestsPerMin', requestsPerMinuteRouter);

exports.app = functions.https.onRequest(app);
