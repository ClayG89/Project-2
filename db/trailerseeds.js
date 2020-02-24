const Trailer = require('../models/trailer.js');

const newTrailers = [
    {
        make: 'Great Dane',
        modelYear: '2016-Sahara',
        status: 'available',
        type: 'van',
    },
];

Trailer.deleteMany().then(() => {
    return Trailer.create(newTrailer);
}).then(() => {
    console.log('Database seeded');
});
