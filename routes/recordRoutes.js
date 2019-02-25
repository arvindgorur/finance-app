const express = require('express');

const recordController = require('../controllers/recordController');

const router = express.Router();

// GET /api/record/records
router.get('/records', recordController.getRecords);

// GET /api/id/recordId
router.get('/id/:recordId', recordController.getRecordById);

// GET /api/category/category
router.get('/category/:category', recordController.getRecordsByCategory);

// POST /api/record/add
router.post('/add', recordController.addRecord);

module.exports = router;