const router = require("express").Router();

router.use('/todo', require('./todo.routes'))

module.exports = router;
