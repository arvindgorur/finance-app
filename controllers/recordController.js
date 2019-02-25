const Record = require('../models/record');

exports.getRecords = (req, res, next) => {
    Record.find({}).then(data => {
        console.log(data);
        console.log(typeof data);
        res.status(200).json({
            records: data
        })
    }).catch(err => {
        console.log(err);
    });
};

exports.getRecordById = (req, res, next) => {
    const recordId = req.params.recordId;
    Record.findById(recordId, {vendor: 1, amount: 1, category: 1}).then(record => {
        if (!record) {
            const error = new Error('Cound not find record');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({ record: record });
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
};

exports.getRecordsByCategory = (req, res, next) => {
    const category = req.params.category;
    Record.find({"category": category}, {vendor: 1, amount: 1, category: 1}).then(record => {
        if (!record) {
            const error = new Error('Cound not find record');
            error.statusCode = 404;
            throw error;
        }
        res.status(200).json({ record: record });
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
};

exports.addRecord = (req, res, next) => {
    const authenticated = req.body.authenticated;
    const date = new Date();
    const vendor = req.body.vendor;
    const amount = req.body.amount;
    const category = req.body.category;

    if(!authenticated || req.body.authenticated != 'true') {
        res.status(401).json({message: 'Not authenticated!'})
    }
    else {
        const record = new Record({
            date: date,
            vendor: vendor,
            amount: amount,
            category: category
        });

        record.save().then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Record inserted successfully!',
                recordId: result._id
            });
        }).catch(err => {
            console.log(err);
        });
    }
};