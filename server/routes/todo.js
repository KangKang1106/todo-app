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

// PATCH localhost:PORT/todo/:todoId
// 수정 성공 시 : true -> res.send(true)
// 수정 실패 시 : false -> res.send(false)
router.patch("/todo/:todoId", async (req, res) => {
  // console.log(req.body);
  // console.log(req.params);
  // res.send(true);
  try {
    let [isUpdated] = await Todo.update(
      {
        title: req.body.title,
        done: req.body.done,
      },
      {
        where: {
          id: req.params.todoId,
        },
      }
    );
    console.log(isUpdated);

    if (!isUpdated) {
      return res.send(false);
    }
    res.send(true);
  } catch (err) {
    res.send(err);
  }

  // .then((result) => {
  //   console.log(result); // 수정 성공 시 [1], 수정 실패 시 [0]

  //   if (result[0]) {
  //     res.send(true);
  //   } else {
  //     res.send(false);
  //   }
  // })
  // .catch((err) => {
  //   res.send(err);
  // });
});

router.delete("/todo/:todoId", async (req, res) => {
  try {
    let isDelete = await Todo.destroy({
      where: {
        id: req.params.todoId,
      },
    });
    if (!isDelete) {
      return res.send(false);
    }
    res.send(true);
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
