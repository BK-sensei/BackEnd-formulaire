const express = require('express')
const app = express()
const port = 5000

const engine = require("express-handlebars").engine
app.engine("handlebars", engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.render('home', {
      layout: 'main'
    })
})

app.post('/form/signup', (req, res) => {
    console.log(req.body)
})

app.listen(port, () => {
  console.log('Server started on port: ' + port)
})