const express = require('express')
const { addTodo } = require('../controllers/addTodo')
const { deleteTodo } = require('../controllers/deleteTodo')
const { updateTodo } = require('../controllers/updateTodo')
const { getTodos } = require('../controllers/getTodos')

const router = express.Router()

router.get('/alltodos', getTodos )
router.post('/addtodo', addTodo)
router.delete('/deletetodo/:id', deleteTodo)
router.put('/updatetodo', updateTodo)

module.exports = router;