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
const Trailer = new mongoose.Schema({
    Make: {
        type: String,
        required: true,
    },
    // model_year: {
    //     type: String,
    //     required: true,
    // },
    Status: {
        type: String,
        default: 'Available',
        required: true,
        enum: ['Available', 'Unavailable', 'Coming soon'],
    },
    Type: {
        type: String,
        default: 'Van',
        required: true,
        enum: ['Van', 'Flatbed', 'Reefer'],
    }
})

/* Step 3
 *
 * TODO: export the schema
 */
module.exports = mongoose.model('Trailer', Trailer);
