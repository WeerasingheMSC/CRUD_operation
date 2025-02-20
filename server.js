require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const PORT = process.env.PORT||5000;
const MONGO_URI = process.env.MONGO_URI;


app.get('/',(req, res) =>{
    res.send('hello world!')
});

app.listen(PORT,() =>{
    console.log(`Server is running on port ${PORT}`);
});

if (!MONGO_URI) {
    console.error("❌ MONGO_URI is missing! Please set it in the .env file.");
    process.exit(1); // Exit the application if MONGO_URI is not set
}

// Connect to MongoDB
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB');
    })
    .catch((err) => {
        console.error('❌ MongoDB connection error:', err);
    });