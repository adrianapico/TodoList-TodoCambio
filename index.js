const express = require('express');
const mongoose =require("mongoose");

const PORT = 3030;
const app = express( );

const todoRoutes = require("./routes/todoRoutes");
 
mongoose.connect("mongodb+srv://adrianapico:1096244597@todocambiotodolist.mc9qxv9.mongodb.net/TodoCambioTodoList")
    .then(() => console.log ("Connected successfully"))
    .catch ((err) => console.error(err));
app.use("/todos", todoRoutes);

app.listen(PORT, ( )=> {
    console.log("The server is listening on port" + PORT);
});