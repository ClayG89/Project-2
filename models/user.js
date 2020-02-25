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
const User = new mongoose.Schema({
    Firstname: {
        type: String,
        required: true,
    },
    Lastname: {
        type: String,
        required: true,
    },
    Title: {
        type: String,
        required: true,
    },
    LoginId: {
        type: Number,
        minlength: 5,
        maxlength: 5,
        required: true
    }
})

/* Step 3
 *
 * TODO: export the schema
 */
module.exports = mongoose.model('User', User);