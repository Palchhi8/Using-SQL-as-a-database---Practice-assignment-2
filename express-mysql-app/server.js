require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 3000;

// MySQL Database Connection
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to MySQL database');
});

// Basic Route
app.get('/', (req, res) => {
    res.send('Express & MySQL Server is Running...');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
