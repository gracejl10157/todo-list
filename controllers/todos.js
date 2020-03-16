import { Todo } from "../models";

class TodosController {
  async fetch(req, res, next) {
    const todos = await Todo.findAll();

    console.log(todos);

    res.render("index", {
      title: "Grace's Todos",
      todos
    });
  }

  async create(req, res, next) {
    console.log(req.body);

    const createdTodo = await Todo.create(req.body);

    res.send(201, createdTodo);
  }

  async delete(req, res, next) {
    console.log(req.params);

    const id = req.params.id;

    await Todo.destroy({
      where: { id }
    });

    res.send(200);
  }
}

module.exports = TodosController;
