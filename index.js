require('dotenv').config();

const express = require('express');
const mongoose = require("mongoose")

const app = express( );
const PORT = 3030;

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = {useUnifiedTopology:true,
  useNewUrlParser:true };

app.use("/todos", todoRoutes);

mongoose.connect("mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@todocambiotodolist.mc9qxv9.mongodb.net/test")
  .then(() => console.log("Connected succesfully"))
  .catch((err) => console.error(err));

app.use(express.json());

app.listen(PORT, ( )=> {
    console.log("The server is listening on port" + PORT);
});

