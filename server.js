const express = require('express');
const path = require('path');
const app = express();

// Basic static file serving
app.use(express.static(path.join(__dirname)));

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'movie_finder.html'));
});

// Other routes
app.get('/school', (req, res) => {
    res.sendFile(path.join(__dirname, 'school.html'));
});

app.get('/1v1game', (req, res) => {
    res.sendFile(path.join(__dirname, '1v1game.html'));
});

app.get('/game', (req, res) => {
    res.sendFile(path.join(__dirname, 'game.html'));
});

// For Vercel, we export the app instead of calling listen
module.exports = app;
