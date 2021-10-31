const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment} = require('../models');
const withAuth = require('../utils/auth');

// get all posts for dashboard
router.get('/', withAuth, (req, res) => {
    console.log(req.session);
    console.log('======================');
    Post.findAll({
        where: {
            email: req.session.email
        },
        attributes: [
            'id',
            'body',
            'title',
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text'],
                include: {
                    model: User,
                    attributes: ['email']
                }
            },
            {
                model: User,
                attributes: ['email']
            }
        ]
    })
        .then(dbPostData => {
            const posts = dbPostData.map(post => post.get({ plain: true }));
            res.render('dashboard', { posts, loggedIn: true });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/edit/:id', withAuth, (req, res) => {
    Post.findByPk(req.params.id, {
        attributes: [
            'id',
            'body',
            'title'
        ],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text'],
                include: {
                    model: User,
                    attributes: ['email']
                }
            },
            {
                model: User,
                attributes: ['email']
            }
        ]
    })
        .then(dbPostData => {
            if (dbPostData) {
                const post = dbPostData.get({ plain: true });

                res.render('edit-post', {
                    post,
                    loggedIn: true
                });
            } else {
                res.status(404).end();
            }
        })
        .catch(err => {
            res.status(500).json(err);
        });
});

module.exports = router;