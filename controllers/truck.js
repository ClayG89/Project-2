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
const Truck = require('../models/truck.js')

/* Step 3 
 * 
 * Create a new router.
 *
 * the router will "contain" all the request handlers that you define in this file.
 * TODO: rename this from templateRouter to something that makes sense. (e.g:
 * `shopRouter`)
 */
const truckRouter = express.Router()

/* Step 4
 * 
 * TODO: Put all request handlers here
 */

truckRouter.get('/new', (req, res) => {
    res.render('issues/newTruckForm');
});

truckRouter.get('/:issueId', (req, res) => {
    Issue.findById(req.params.truckId).then(truck => {
        res.render('trucks/truck', { truck });
    });
});

truckRouter.get('/', (req, res) => {
    Truck.find().then(trucks => {
        res.render('trucks/trucks', { trucks });
    });
});

truckRouter.get('/:truckId/edit', (req, res) => {
    Truck.findById(req.params.truckId).then(truck => {
        res.render('trucks/editTruckForm', { truck });
    });
});

truckRouter.post('/', (req, res) => {
    Truck.create(req.body).then(() => {
        res.redirect('/trucks');
    });
});

truckRouter.put('/:truckId', (req, res) => {
    Truck.findByIdAndUpdate(req.params.issueId, req. body).then(truck => {
        res.redirect('/trucks');
    });
});

truckRouter.delete('/:truckId', (req, res) => {
    Truck.findByIdAndDelete(req.params.issueId).then(() => {
        res.redirect('/trucks');
    });
});

/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = issueRouter;
