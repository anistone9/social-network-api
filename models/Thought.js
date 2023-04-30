const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

// Schema to create Thought model
const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            // TODO: use a getter method to format the timestamp on query
        
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            getters: true,
            virtuals: true,
        },
    }
);

// Create a virtual property 'reactionCount' that retrieves the length of the thought's reactions array field on query
thoughtSchema
.virtual('reactionCount')
// Getter
.get(function () {
    return this.reactions.length;
});

// Initialize the Thought model
const Thought = model('thought', thoughtSchema);

module.exports = Thought;