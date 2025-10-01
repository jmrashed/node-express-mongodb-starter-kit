const mongoose = require('mongoose');
const dotenv = require('dotenv');
const seedUsers = require('./userSeeder');
const seedResources = require('./resourceSeeder');

dotenv.config();
mongoose.set('strictQuery', false);

const runSeeders = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error('MONGODB_URI not found in environment variables');
        }
        await mongoose.connect(mongoUri);
        console.log('Connected to MongoDB');

        await seedUsers();
        await seedResources();

        console.log('All seeders completed successfully');
        process.exit(0);
    } catch (error) {
        console.error('Seeding failed:', error);
        process.exit(1);
    }
};

runSeeders();