const path = require('path');

const express = require('express');

const listController = require('../controllers/list');

const router = express.Router();

router.get('/get-list', listController.getList);

module.exports = router;