const signupController = require('./signup');
const loginController = require('./login');
const profileController = require('./profile');
const verifyController = require('./verify');
const jokesController = require('./auth');
const newPostController = require('./newPost');
const homeController = require('./home');
const likeController = require('./like');
const dislikeController = require('./dislike');

module.exports = (app => {
    signupController(app),
    loginController(app),
    profileController(app),
    verifyController(app),
    jokesController(app),
    newPostController(app),
    homeController(app),
    likeController(app),
    dislikeController(app)
})