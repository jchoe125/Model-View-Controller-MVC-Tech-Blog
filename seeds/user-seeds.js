const { User } = require('../models');

const userData = [{
        username: "Walter",
        password: "Breaking",
    },
    {
        username: "Jesse",
        password: "Bad",
    },
    {
        username: "Gus",
        password: "IsAwesome",
    },
];

const seedUsers = () => User.bulkCreate(userData);
module.exports = seedUsers;