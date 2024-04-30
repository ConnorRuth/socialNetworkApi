const { Schema } = require('mongoose');

const reactionSchema = new Schema(
    {
        reactText: {
            type: String,
            required: true,
            maxlength: 400,
        },
        username: {
            type: String,
            required: true,
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        toJSON: {
            getters: true,
        },
    }
);

module.exports = reactionSchema;