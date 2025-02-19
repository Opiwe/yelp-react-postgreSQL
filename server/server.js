require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db");
const { rows } = require("../client/node_modules/pg/lib/defaults");

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
app.get('/api/v1/restaurants/:id', async (req, res) => {

    console.log(req.params.id);

    try {
        const results = await db.query("select * from restaurants where id = $1", [req.params.id,]);
        // select * from restaurants where id = req.params.id

        res.status(200).json({
            status: 'success',
            data: {
                restaurant: results.rows[0],
            }
        });

    } catch (err) {
        console.log(err);
    }
});

// Create a restaurants
app.post('/api/v1/restaurants', async (req, res) => {

    console.log(req.body);

    try {
        const results = await db.query("INSERT INTO restaurants (name, location, price_range) values ($1, $2, $3) returning *", 
        [req.body.name, req.body.location, req.body.price_range]);

        console.log(results);

        res.status(201).json({
            status: 'success',
            data: {
                restaurant: results.rows[0],
            }
        });

    } catch (err) {
        console.log(err);
    }
});

// Update a restaurant
app.put('/api/v1/restaurants/:id', async (req, res) => {

    try {
        const results = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 where id = $4 returning *", 
        [req.body.name, req.body.location, req.body.price_range, req.params.id]);

        console.log(results);

        res.status(200).json({
            status: 'success',
            data: {
                restaurant: results.rows[0],
            }
        });
    } catch (err) {
        console.log(err);
    }

    console.log(req.params.id);
    console.log(req.body);
});

// Delete a restaurant
app.delete('/api/v1/restaurants/:id', async (req, res) => {

    try {
        const results = await db.query("DELETE FROM restaurants where id = $1", [req.params.id]);
        
        res.status(204).json({
            status: 'success',
        });
    } catch (err) {
        console.log(err);
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:${PORT}`);
});

