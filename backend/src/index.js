const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/authRoutes');
const placeRoutes = require('./routes/placeRoutes');
const { protect, admin } = require('./middleware/auth');
const contactRoutes = require('./routes/contactRoutes');
const viewRoutes = require('./routes/viewRoutes');
const trackViews = require('./middleware/viewTracker');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(trackViews);

// Default route for testing
app.get('/', (req, res) => {
    res.send('Lap trinh web huhuhu');
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/places', placeRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/views', viewRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
})
.catch(err => {
    console.error('Database connection error:', err);
});
