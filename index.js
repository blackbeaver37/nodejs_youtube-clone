import express from "express";
// const express = require('express');
const app = express();

const PORT = 4000;

const handleListening = () => console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res) => res.send('Hello from Home!');
const handleProfile = (req, res) => res.send('You are on Profile');

app.get('/', handleHome);

app.get('/profile', handleProfile);

// Listening Port & start function when start listen
app.listen(PORT, handleListening);