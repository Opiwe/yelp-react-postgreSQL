require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.PORT || 8000;

app.use(cors());
app.use(express.json());


app.get('/', (req, res) => {
    res.json({message: 'server is testing'});
});

// Get all restaurants
app.get('/api/v1/restaurants', (req, res) => {
    console.log('route handler ran')
    res.status(200).json({
        status: 'success',
        data: {
            restaurants: ["mcdonlads", "wendys"],
        },
    });
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

