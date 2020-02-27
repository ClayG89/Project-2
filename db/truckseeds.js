const Truck = require('../models/truck.js');

let defaultOption = ("#Options").valueOf();


const newTrucks = [
    {
        make: 'Peterbilt',
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
