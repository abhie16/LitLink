const mongoose = require('mongoose');

const authorSchema = new mongoose.Schema(
    {
        firstName:{
            type: String,
            required: true
        },
        lastName:{
            type: String,
            required: true,
        },
        email:{
            type: String,
            required: true,
        },
        website:{
            type: String,
            required: true,
        },
        associatedBooks:{
            type: Array,
            default: [],
        },
        address:{
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const authorModel = mongoose.model('authors', authorSchema);

module.exports = authorModel;