const Truck = require('../models/truck.js');

const newTrucks = [
    {
        description: 'Server crashed',
        createdAt: new Date(1970, 1, 1),
        status: 'open',
        priority: 'Low',
    },
];

Truck.deleteMany().then(() => {
    return Truck.create(newTrucks);
}).then(() => {
    console.log('Database seeded');
});
