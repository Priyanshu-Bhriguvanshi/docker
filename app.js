const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://mongo-db:27017/my-database")
.then(() => {
    console.log("Connection successful");

    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
})
.catch((err) => {
    console.log("Database connection error:", err);
});
