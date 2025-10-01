const mongoose = require('mongoose');

// Fix deprecation warning
mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (err) {
        console.error(`Error: ${err.message}`);
        console.log('MongoDB connection failed. Running without database...');
        // Don't exit process, allow server to run without DB
    }
};

module.exports = connectDB;