const express = require('express');

const recordController = require('../controllers/recordController');

const router = express.Router();

// GET /api/record/records
router.get('/records', recordController.getRecords);

// POST /api/record/add
router.post('/add', recordController.addRecord);

module.exports = router;