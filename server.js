const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const authenticateToken = require('./middleware/authenticateToken');
const User = require('./models/User');
const Item = require('./models/Item');

// Initialize Express
const app = express();

// Body parser middleware
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/myapp', {
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.get('/', (req, res) => {
    res.send('Welcome to my API!');
  });

// User Registration endpoint
app.post('/api/register', async (req, res) => {
  // Implementation remains the same
});

// User Login endpoint
app.post('/api/login', async (req, res) => {
  // Implementation remains the same
});

// CRUD operations for items
// Create item
app.post('/api/items', authenticateToken, async (req, res) => {
  // Implementation remains the same
});

// Read items
app.get('/api/items', authenticateToken, async (req, res) => {
  // Implementation remains the same
});

// Update item
app.put('/api/items/:id', authenticateToken, async (req, res) => {
  // Implementation remains the same
});

// Delete item
app.delete('/api/items/:id', authenticateToken, async (req, res) => {
  // Implementation remains the same
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
