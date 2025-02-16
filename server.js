const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Basic middleware
app.use(express.json());
app.use(express.static(__dirname));

// Health check endpoint
app.get('/healthz', (req, res) => {
    res.status(200).send('OK');
});

// Main routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'movie_finder.html'));
});

app.get('/school', (req, res) => {
    res.sendFile(path.join(__dirname, 'school.html'));
});

app.get('/1v1game', (req, res) => {
    res.sendFile(path.join(__dirname, '1v1game.html'));
});

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'game.html'));
});

// Start server
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});

// Handle shutdown gracefully
process.on('SIGTERM', () => {
    server.close(() => {
        console.log('Server shutting down');
    });
});
