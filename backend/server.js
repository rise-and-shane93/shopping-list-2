const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const api = require('./backend/routes/Api');
const passport = require("passport");
const path = require('path');

const db = require('./config/keys').mongoURI;

app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json({type: 'application/*+json'}));
app.use(bodyParser.urlencoded({extended: true}));