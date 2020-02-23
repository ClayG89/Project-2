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
const Trailer = require('../models/Trailer.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const trailerRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

trailerRouter.get('/new', (req, res) => {
    res.render('trailers/addTrailer');
});

trailerRouter.get('/:trailerId', (req, res) => {
    Trailer.findById(req.params.trailerId).then(trailer => {
        res.render('trailers/trailer', { trailer });
    });
});

trailerRouter.get('/', (req, res) => {
    Trailer.find().then(trailer => {
        res.render('trailers/trailers', { trailers });
    });
});

trailerRouter.get('/:trailerId/edit', (req, res) => {
    Trailer.findById(req.params.trailerId).then(trailer => {
        res.render('trailers/editTrailer', { trailer });
    });
});

trailerRouter.post('/', (req, res) => {
    Trailer.create(req.body).then(() => {
        res.redirect('/trailers');
    });
});

trailerRouter.put('/:trailerId', (req, res) => {
    Trailer.findByIdAndUpdate(req.params.trailerId, req. body).then(trailer => {
        res.redirect('/trailers');
    });
});

trailerRouter.delete('/:trailerId', (req, res) => {
    Trailer.findByIdAndDelete(req.params.trailerId).then(() => {
        res.redirect('/trailers');
    });
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = trailerRouter;