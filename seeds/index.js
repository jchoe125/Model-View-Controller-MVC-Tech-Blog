const seedComments = require('./comment-seeds');
const seedPosts = require('./post-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({ force: true }, seedComments);
    await seedComments();
    await seedUsers();
    await seedPosts();
    process.exit(0);
};

seedAll();