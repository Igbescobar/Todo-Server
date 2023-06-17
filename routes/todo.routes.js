const router = require("express").Router();

const Todo = require('./../models/Todo.model')

router.get("/getAllTodos", (req, res, next) => {

  Todo
    .find()
    // .sort({ completed: 1 })
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

router.put('/:todo_id/edit', (req, res, next) => {

  const { todo_id } = req.params
  const { task, completed } = req.body

  Todo
    .findByIdAndUpdate(todo_id, { task, completed })
    .then(response => res.json(response))
    .catch(err => next(err))
})
router.delete("/:todo_id/delete", (req, res, next) => {

  const { todo_id } = req.params

  Todo
    .findByIdAndDelete(todo_id)
    .then(() => res.sendStatus(204))
    .catch(err => next(err))
})

module.exports = router;
