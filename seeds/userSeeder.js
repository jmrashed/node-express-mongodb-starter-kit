const { User } = require('../models');

const users = [
    {
        username: 'admin',
        email: 'admin@example.com',
        password: 'admin123',
        role: 'admin'
    },
    {
        username: 'moderator',
        email: 'moderator@example.com',
        password: 'moderator123',
        role: 'moderator'
    },
    {
        username: 'user1',
        email: 'user1@example.com',
        password: 'user123',
        role: 'user'
    }
];

const seedUsers = async () => {
    try {
        await User.deleteMany({});
        await User.insertMany(users);
        console.log('Users seeded successfully');
    } catch (error) {
        console.error('Error seeding users:', error);
    }
};

module.exports = seedUsers;