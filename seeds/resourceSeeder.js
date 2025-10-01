const { Resource, User } = require('../models');

const seedResources = async () => {
    try {
        const adminUser = await User.findOne({ role: 'admin' });
        if (!adminUser) {
            console.log('Admin user not found. Please seed users first.');
            return;
        }

        const resources = [
            {
                name: 'Sample Resource 1',
                description: 'This is a sample resource for testing',
                category: 'general',
                createdBy: adminUser._id,
                tags: ['sample', 'test']
            },
            {
                name: 'Premium Resource',
                description: 'This is a premium resource',
                category: 'premium',
                createdBy: adminUser._id,
                tags: ['premium', 'exclusive']
            },
            {
                name: 'Restricted Resource',
                description: 'This is a restricted resource',
                category: 'restricted',
                createdBy: adminUser._id,
                tags: ['restricted', 'admin-only']
            }
        ];

        await Resource.deleteMany({});
        await Resource.insertMany(resources);
        console.log('Resources seeded successfully');
    } catch (error) {
        console.error('Error seeding resources:', error);
    }
};

module.exports = seedResources;