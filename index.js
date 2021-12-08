const express = require('express')
const app = express()
const port = 5000
const engine = require("express-handlebars").engine

app.engine("handlebars", engine())
app.set('view engine', 'handlebars')

app.use(express.urlencoded({ extended: true }))

app.get("/", (req, res, next) => {
    res.render('home', {
      layout: 'main'
    })
})

app.post('/form/signup', (req, res) => {
    console.log(req.body)
    const { username, password } = req.body

    // Pour redirect vers la route `/signup`
    // Avec les paramateres url username et password
    // On démarre la séquence de parametres avec '?'
    // parametre_name=paramatre_value
    // On sépare nos parametres par '&'
    res.redirect(`/signup?username=${username}&password=${password}`)

    // affichage direct du template signup avef les variables
    // res.render('signup', {
    //   username: req.body.username,
    //   password: req.body.password
    // })
})

app.get('/signup', (req, res, next) => {
    const { username, password } = req.query

    res.render('signup', {
        username,
        password
    })
})

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
})