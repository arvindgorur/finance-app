const Record = require('../models/record');

exports.getRecords = (req, res, next) => {
    Record.find({}).then(data => {
        console.log(data);
        res.status(200).json({
            records: data
        })
    }).catch(err => {
        console.log(err);
    });
};

exports.addRecord = (req, res, next) => {
    const date = new Date();
    const vendor = req.body.vendor;
    const amount = req.body.amount;
    const category = req.body.category;

    const record = new Record({
        date: date,
        vendor: vendor,
        amount: amount,
        category: category
    });

    record.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Record inserted successfully!'
        });
    }).catch(err => {
        console.log(err);
    });
};