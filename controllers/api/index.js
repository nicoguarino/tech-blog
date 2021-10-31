//router use /user for routes user-routes
    //all routes in user-routes will start with /api/user/
const router = require('express').Router();

const userRoutes = require('./user-route.js');
const postRoutes = require('./post-route');
const commentRoutes = require('./comment-route');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;