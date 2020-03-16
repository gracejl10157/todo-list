const express = require("express");
const router = express.Router();
const TodosController = require("./controllers/todos");

const controller = new TodosController();

router.get("/", controller.fetch);
router.post("/todos", controller.create);
router.delete("/todos/:id", controller.delete);

module.exports = router;

// get /todos -> all todos
// post /todos -> create new todo
// delete /todos/:id -> delete todo
