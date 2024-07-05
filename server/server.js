require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const { rows } = require("pg/lib/defaults");

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({message: 'server is testing'});
});

// Get all restaurants
app.get('/api/v1/restaurants', async (req, res) => {

    try {
        const results = await db.query("select * from restaurants");

        console.log(results);

        res.status(200).json({
            status: 'success',
            results: results.rows.length,
            data: {
                restaurants: results.rows,
            },
        });
        
    } catch (err) {
        console.log(err);
    }
});

// Get one single restaurant
app.get('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params);

    res.status(200).json({
        status: 'success',
        data: {
            restaurant: "mcdonlanlds"
        }
    });
});

// Create a restaurants
app.post('/api/v1/restaurants', (req, res) => {
    console.log(req.body);

    res.status(201).json({
        status: 'success',
        data: {
            restaurant: "mcdonlanlds"
        }
    });
});

// Update a restaurant
app.put('/api/v1/restaurants/:id', (req, res) => {
    console.log(req.params.id);
    console.log(req.body);

    res.status(200).json({
        status: 'success',
        data: {
            restaurant: "mcdonlanlds"
        }
    });
});

// Delete a restaurant
app.delete('/api/v1/restaurants/:id', (req, res) => {
    res.status(204).json({
        status: 'success',
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

