const mongoose = require("mongoose");
//const Todo = require("../models/Todo");

const TodoSchema = new mongoose.Schema({
    title: String,
    completed: Boolean
});

module.exports = mongoose.model("Todo", TodoSchema);