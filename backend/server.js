const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const api = require('./routes/Api');
const listRoutes = require('./routes/list');
// const passport = require("passport");
const path = require('path');

const db = require('./config/keys').mongoURI;

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/list', listRoutes);

mongoose
    .connect(
        process.env.MONGODB_URI || db,
        {useNewUrlParser: true}
    )
    .then(() => {
        console.log("MongoDB successfully connected");
        app.listen(3003);
    })
    .catch(err => console.log(err));