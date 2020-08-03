const express = require('express');
//const cors = require('cors');
const path = require('path');
const session = require('express-session');

const port = process.env.PORT || 5000;

const chartRouter = require('./routes/charts-routes');
const uploadFileRouter = require('./routes/upload');
const HttpError = require('./models/http-error');
const indexRouter = require('./routes/index');

const app = express();


//app.use(cors());
app.use('/static', express.static(path.join(__dirname, 'client/build/static')));
app.use(session({
    secret: 'sssshhhhh',
    resave: true,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use('/', indexRouter);
app.use('/api/upload', uploadFileRouter);
app.use('/api/charts', chartRouter);

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route', 404);
    throw error;
});

app.use((error, req, res, next) => {
    if (res.headerSent) {
        next(error);
    }
    res.status(error.code || 500);
    res.json({message: error.message || 'An unkown error occured!'});
});

app.listen(port);