const router = require("express").Router();

const User = require("../models/User.model");
const Todo = require('./../models/Todo.model')

const { isAuthenticated } = require("../middlewares/verifyToken.middleware")

router.get("/:user_id/getAllTodos", (req, res, next) => {
  const { user_id } = req.params;

  Todo
    .find({ user: user_id })
    .then(todos => res.json(todos))
    .catch(err => next(err));
});



router.post("/:user_id/saveTodo", (req, res, next) => {
  const { task } = req.body;
  const { user_id } = req.params;

  Todo
    .create({ task, user: user_id })
    .then(todo => {
      return (
        User
          .findByIdAndUpdate(user_id, { $push: { todos: todo._id } }, { new: true }
          ));
    })
    .then(user => {
      res.json({ user });
    })
    .catch(err => {
      next(err);
    });
});


router.put('/:todo_id/edit', (req, res, next) => {

  const { todo_id } = req.params
  const { task } = req.body

  Todo
    .findByIdAndUpdate(todo_id, { task })
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
