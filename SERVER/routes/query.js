const express = require('express');
const router = express.Router();

const {createQuery} = require('../controllers/Query');

router.post("/createQuery" , createQuery);

module.exports = router;