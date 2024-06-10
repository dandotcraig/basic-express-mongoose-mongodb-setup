const express = require('express');
const mongoose = require("mongoose");
const Product = require("./models/product.model");
const productRoute = require("./routes/product.route")
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes file
app.use("/api/products", productRoute)

app.get("/", (req, res) => {
    res.send("Hello from node API");
});

mongoose.connect("mongodb+srv://dandotcraig:EtQXGUNIUGLOP6Pw@backend.pzbm8q7.mongodb.net/?retryWrites=true&w=majority&appName=backend")
.then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
        console.log("Server is running on 3000")
    });
    
})
.catch(() => {
    console.log("Connected failed");
});