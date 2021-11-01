const Post = require('./Post');
const User = require('./User');
const Comment = require('./Comments');

User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

User.hasMany(Comment, {
    foreignKey: 'post_id'
});
// User.belongsToMany(Post, {
//     onDelete: 'SET NULL'
// });

Comment.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id',
    onDelete: 'SET NULL'
});

Post.hasMany(Comment);

module.exports = { User, Post, Comment }