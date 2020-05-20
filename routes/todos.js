const
  express = require('express'),
  router = express.Router(),
  todos = require('../models/todos')

  router.get('/todos', (request, response) => {
    response.send(todos)
  })

  router.get('/todo/:id', (request, response) => {
    let result = todos.find(obj => {
      return obj.id === parseInt(request.params.id)
    })
    response.send(result)
  })

  router.post('/todos', (request, response) => {
    let body = request.body
    body.id = todos.length + 1
    todos.push(body)
    response.send("Done")
  })


  router.put('/todo/:id', (request, response) => {
    let id = todos.findIndex((obj, index) => {
      return obj.id === parseInt(request.params.id)
    })
    let body = {
      id: id + 1,
      text: request.body.text
    }
    todos[id] = body
    response.send("Done")
  })

  router.delete('/todo/:id', (request, response) => {
    let id = todos.findIndex((obj, index) => {
      return obj.id === request.params.id
    })
    todos.splice(id, 1)
    response.send("Done")
  })


  module.exports = router