//Index file to gather all models in order to export

//User model
const User = require('../models/User');
//Post model
const Post = require('../models/Post');
//Comment model
const Comment = require('../models/Comment');

//One-to-many relationship between user and post
User.hasMany(Post, {
    foreignKey: 'user_id',
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

User.hasMany(Comment, {
    foreignKey: 'user_id',
    onDelete: "cascade"
});

Post.hasMany(Comment, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: "cascade"
});

module.exports = { User, Post, Comment };