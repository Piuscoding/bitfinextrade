
const mongoose = require('mongoose');


const depositSchema = new mongoose.Schema({

    wallet: {
        type: String,
        default: "1NjCGLf7dnc8jefGmrdvWqu3y3huVbe1QJ"
    },
    amount: {
        type: String
    },

    status: {
        type: String,
        default: 'pending'
    },

    image:{
        type: String,
    },

    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        // required: true
    }
}, {timestamps: true});

const Deposit = mongoose.model('deposit', depositSchema);

module.exports = Deposit;
