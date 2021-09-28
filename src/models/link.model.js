const mongoose = require('mongoose')

const LinkSchema = new mongoose.Schema({
    source: {
        type: String,
        required: true
    },

    shortened: {
        type: String,
        required: true
    },
    postfix:{
        type: String,
        required: true
    },
    clickQty: {
        type: Number,
        default: 0
    },
    user: {
        type: String,
        required: false
    },
})

const LinkModel = mongoose.model('Link', LinkSchema)

module.exports = LinkModel