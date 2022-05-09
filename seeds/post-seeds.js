const { Post } = require('../models');

const postData = [{
        title: "This is an example Title",
        content: "hello world",
        user_id: 1
    },
    {
        title: "This is example Title #2",
        content: "hello moon",
        user_id: 2
    },
    {
        title: "This is example Title #3",
        content: "hello saturn",
        user_id: 3
    },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;