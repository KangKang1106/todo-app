const express = require("express");
const { Todo } = require("../models");
const router = express.Router();

// 기본 주소 : localhost:PORT/

// GET localhost:PORT/todos - show all todos (READ)
router.get("/todos", async (req, res) => {
  try {
    let data = await Todo.findAll();
    res.send(data);
  } catch (err) {
    res.send(err);
  }

  // Todo.findAll().then((data) => {
  //   console.log(data);
  //   res.send(data);
  // });
});

// POST localhost:PORT/todo - create a new todo (CREATE)
router.post("/todo", (req, res) => {
  let newTodo = Todo.create({
    title: req.body.title,
  }).then((data) => {
    res.send(data);
  });
});

module.exports = router;
