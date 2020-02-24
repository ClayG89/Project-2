/* 
 * Place all DB schemas here for a single model.
 */

/* Step 1
 *
 * Import mongoose connection
 *
 */
const mongoose = require('../db/connection.js')

/* Step 2
 *
 * TODO: create model schema 
 *
 */
const Truck = new mongoose.Schema({
    Make: {
        type: String,
        required: true,
    },
    model_year: {
        type: String,
        // required: true,
    },
    Status: {
        type: String,
        default: 'available',
        required: true,
        enum: ['Available', 'Unavailable', 'Coming soon'],
    },
    Color: {
        type: String,
        required: true,
    },
    Engine: {
        type: String,
        required: true,
    }
})

/* Step 3
 *
 * TODO: export the schema
 */
module.exports = mongoose.model('Truck', Truck);
