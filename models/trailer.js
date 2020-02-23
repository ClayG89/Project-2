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
    make: {
        type: String,
        required: true,
    },
    model_year: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        default: 'available',
        required: true,
        enum: ['available', 'unavailable', 'coming soon'],
    },
    type: {
        type: String,
        defoult: 'van',
        required: true,
        enum: ['van', 'flatbed', 'reefer'],
    }
})

/* Step 3
 *
 * TODO: export the schema
 */
module.exports = mongoose.model('Trailer', Trailer);
