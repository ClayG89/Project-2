const User = require('../models/user.js');

const newUser = [
    {
        Firstname: 'Clay',
        Lastname: 'Guess',
        title: 'Owner',
        LoginId: '00001',
    },
];

User.deleteMany().then(() => {
    return User.create(newUsers);
}).then(() => {
    console.log('Database seeded');
});
