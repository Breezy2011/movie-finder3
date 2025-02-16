const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'movie_finder.html'));
});

app.listen(port, '0.0.0.0', () => {
    console.log(`Server is running on port ${port}`);
});
