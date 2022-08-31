const router = require("express").Router();
const {
  createTodo,
  getAllTodos,
  getSingle,
  deleteOne,
  updateTodo,
} = require("../controller/todoController");



router.route("/").get(getAllTodos).post(createTodo);
router.route("/:id").get(getSingle).delete(deleteOne).patch(updateTodo);
// router.post("/todo", createTodo);
// router.get("/todo", getAllTodos);
// router.get("/todo/:id", getSingle);
// router.delete("/todo/:id", deleteOne);
// router.patch("todo/:id", updateTodo);

module.exports = router;
