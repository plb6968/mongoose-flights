
var express = require('express');
var router = express.Router();
var detailsCtrl = require('../controllers/details');

// POST /flights/:id/reviews
router.post('/flights/:id/details', detailsCtrl.create);