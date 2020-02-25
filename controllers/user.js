/* Step 1 import express
 *
 */
const express = require('express')

/* Step 2
 *
 * Import the api files from the models
 *
 * TODO: change the file path to the models file you'll need to use.
 * TODO: rename this from `TemplateModel` to something more sensible (e.g:
 * `Shop`)
 *
 * NOTE: You may need to import more than one API to create the 
 * controller you need.
 * 
 */
const User = require('../models/User.js')


/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const userRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

userRouter.get('/new', (req, res) => {
    res.render('users/addUser');
});

userRouter.get('/:userId', (req, res) => {
    User.findById(req.params.userId).then(user => {
        console.log(req.params.userId)
        res.render('users/user', { user});
    });
});

userRouter.get('/', (req, res) => {
    User.find().then(users => {
        res.render('users/users', { users });
    });
});

userRouter.get('/:userId/edit', (req, res) => {
    User.findById(req.params.userId).then(user => {
        console.log(req.params.userId)
        res.render('users/editUser', { user });
    });
});

userRouter.post('/', (req, res) => {
    User.create(req.body).then(() => {
        res.redirect('/users');
    });
});

userRouter.put('/:userId', (req, res) => {
    User.findByIdAndUpdate(req.params.userId, req.body).then(user => {
        res.redirect('/users');
    });
});

userRouter.delete('/:userId', (req, res) => {
    User.findByIdAndDelete(req.params.userId).then(() => {
        res.redirect('/users');
    });
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = userRouter;
