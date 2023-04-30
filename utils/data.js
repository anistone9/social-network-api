const usernames = [
    'jsmith',
    'jreynolds',
    'mshort',
    'kmarshall',
    'jsarbolandi',
    'itoal',
    'ddiaz',
    'dsingh',
    'jzharko',
    'acaron',
    'tglass',
    'asanchez',
    'jlentz',
    'davtandilan',
    'bsmith',
    'slee',
    'eperalta',
    'rjamerson',
    'emendez',
    'sestrada',
    'jkraus',
    'vmando',
    'jbrown'
];

const addThoughts = [
    'Very good point',
    'I might disagree with you on that one',
    'I can get on board with that',
    'Enough said',
    'Very pretty',
    'I love what you did with the decor',
    'Can you direct message me',
    'I watched this so many times'
];

// Get a random items given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Get a random username
const getRandomUsername = () => `${getRandomArrItem(usernames)}`;

// Function to generate random thoughts to add to user object
const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
        results.push({
            thoughtText: getRandomArrItem(addThoughts), 
        });
    }
    return results;
};

// Export functions for use in seed file
module.exports = { getRandomUsername, getRandomThoughts };