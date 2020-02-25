const User = require('../models/user.js');

const newUsers = [
    {
        Firstname: 'Clay',
        Lastname: 'Guess',
        Title: 'Owner',
        LoginId: '00001',
    },
];

User.deleteMany().then(() => {
    return User.create(newUsers);
}).then(() => {
    console.log('Database seeded');
});
