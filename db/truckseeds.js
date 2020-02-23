const Truck = require('../models/truck.js');

const newTrucks = [
    {
        make: 'Peterbilt',
        modelYear: '2016-389',
        status: 'available',
        color: 'black',
        engine: 'Cummins isx',
    },
];

Truck.deleteMany().then(() => {
    return Truck.create(newTrucks);
}).then(() => {
    console.log('Database seeded');
});
