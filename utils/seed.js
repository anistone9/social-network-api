const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomThoughts } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing users
    await User.deleteMany({});

    // Drop existing thoughts
    await Thought.deleteMany({});

    // Create empty array to hold the users
    const users = [];

    // Loop 20 times and add users to the users array
    for (let i = 0; i < 20; i++) {
        // Get random thought objects using the helper function imported from ./data
        const thoughts = getRandomThoughts(20);

        const usernames = getRandomUsername();

        users.push({
            usernames,
            thoughts,
        });
    }

    // Add users to the collection and await the results
    await User.collection.insertMany(users);

    // Add thoughts to the collection and await the results
    await Thought.collection.insertOne({
        thoughtText: 'Now there is a thought',
        username: [...users],
    });

    // Log out the seed data to indicate what should appear in the database
    console.table(users);
    console.info('Seeding complete');
    process.exit(0);
});
