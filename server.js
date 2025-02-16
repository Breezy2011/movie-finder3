const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Basic static file serving
app.use(express.static(__dirname));

// Simple health check
app.get('/healthz', (req, res) => {
    res.status(200).send('healthy');
});

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'movie_finder.html'));
});

// Start server
app.listen(PORT, () => {
    console.log('Server is running on port:', PORT);
});
