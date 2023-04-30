const { Schema, model } = require('mongoose');

// Schema to create User model
const userSchema = new Schema(
    {
        username: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            validate: {
                validator: function(v) {
                    return /^([a-z0-9_.-]+)@([\da-z.-]+).([a-z.]{2,6})$/.test(v);
                },
                message: "Please enter a valid email address"
            },
        },
        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
            type: Schema.Types.ObjectId,
            ref: 'Friends',
            },
        ],
    },
    {
        // Include virtuals with the response, overriding the default behavior
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);

// Create a virtual property 'friendCount' that gets the count of friends associated with a user
userSchema
.virtual('friendCount')
.get(function () {
    return this.friends.length;
});

const User = model('user', userSchema);

module.exports = User;
