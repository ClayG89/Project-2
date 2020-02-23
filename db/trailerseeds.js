const Trailer = require('../models/trailer.js');

const newTrucks = [
    {
        make: 'Great Dane',
        modelYear: '2016-Sahara',
        status: 'available',
        type: 'van',
    },
];

Trailer.deleteMany().then(() => {
    return Truck.create(newTrailer);
}).then(() => {
    console.log('Database seeded');
});
