const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(__dirname));

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).send('OK');
});

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

app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
});
