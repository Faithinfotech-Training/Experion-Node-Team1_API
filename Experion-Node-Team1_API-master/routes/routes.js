const express = require('express');
const router = express.Router();
const Routes1 = require('./courseroute');
const Routes2 = require('./resourceroute');
const Routes3 = require('./enquiryroute');
const Routes4 = require('./usersroute');
const Routes5 = require('./enquirystatusroute');

router.use('/courses',Routes1);

router.use('/resources',Routes2);

router.use('/users',Routes4);

router.use('/enquiries',Routes3);
router.use('/enquirystatus',Routes5);

module.exports = router;