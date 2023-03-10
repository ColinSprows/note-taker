const express = require('express')
const path = require('path')
const htmlRouter = express.Router()

// VIEWS

htmlRouter.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
});

// KEEP WILDCARD ROUTE AT BOTTOM
htmlRouter.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

module.exports = htmlRouter