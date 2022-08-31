const { findByIdAndUpdate } = require("../model/todo");
const Todo = require("../model/todo");

//create a Todo
const createTodo = async (req, res) => {
  const { title, body } = req.body;
  try {
    const todo = await Todo.create({ title, body });
    res.status(201).json({ msg: "successful", todo });
  } catch (error) {
    res.status(500).json({ msg: "TODO not created" });
  }
};
//get all of the TODOs
const getAllTodos = async (req, res) => {
  try {
    const allTodo = await Todo.find();
    res.status(201).json({ allTodo, msg: "All usser gotten" });
  } catch (error) {
    res.status(500).json({ msg: "TODOs not found" });
  }
};
// get a single one

const getSingle = async (req, res) => {
  const { id } = req.params;
  const singletodo = await Todo.findById(id);
  if (singletodo) {
    return res.status(200).json({ singletodo });
  }
  res.status(404).json({ msg: "Todolist does not exist" });
};
// update todo
const updateTodo = async (req, res) => {
  const { id } = req.params;
  try {
    const existingTodo = await Todo.findById(id);
    const updatedTodo = await Todo.findByIdAndUpdate(existingTodo, req.body, {
      new: true,
      runValidators: true,
      //overwrite:true
    });
    res.status(201).json({ data: updatedTodo });
  } catch (error) {
    res.status(500).json({ msg: "TODO not found" });
  }
};
// findByIdAndUpdate(data, req.body, {new:true})
// delete todo
const deleteOne = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTodo = await Todo.findByIdAndDelete(id);
    res.status(201).json({ msg: "Deleted Successfully", data: deleteTodo });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { createTodo, getAllTodos, getSingle, deleteOne, updateTodo };
