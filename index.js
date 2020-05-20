const express = require('express'),
  cors = require('cors'),
  parser = require('body-parser')

const app = express()
const port = process.env.PORT || 8000

app.use(cors())
app.use(parser.json())

const baselink = ''

app.use("", require('./routes/todos'))

app.listen(port, console.log(`Server Running at port ${port}`))