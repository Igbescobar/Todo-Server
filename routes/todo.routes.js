const router = require("express").Router();

const Todo = require('./../models/Todo.model')

router.get("/getAllTodos", (req, res, next) => {

  Todo
    .find()
    .then(response => res.json(response))
    .catch(err => next(err))
});

router.post("/saveTodo", (req, res, next) => {

  const { task } = req.body

  Todo
    .create({ task })
    .then(response => res.json(response))
    .catch(err => next(err))
});

module.exports = router;
