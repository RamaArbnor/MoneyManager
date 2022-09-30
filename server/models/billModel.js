const mongoose = require('mongoose')

const Schema = mongoose.Schema

const billSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now,
        required: true
    },
    description: {
        type: String
    },
    amount: {
        type: Number,
        required: true
    },
    paid: {
        type: Boolean,
        required: true

    }

}, {timestamps: true})

module.exports = mongoose.model('Bill', billSchema)

    // < Bill
    //     icon = 'fa-solid fa-money-bills'
    //     name = 'admin'
    //     date = '21.05.2021'
    //     description = 'Grocerious for torte'
    //     amount = '5.18'
    // />