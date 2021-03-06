const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const recordSchema = new Schema({
        date: {
            type: Date,
            required: true
        },
        vendor: {
            type: String,
            required: true
        },
        amount: {
            type: Number,
            required: true
        },
        category: {
            type: String,
            required: true
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Record', recordSchema);