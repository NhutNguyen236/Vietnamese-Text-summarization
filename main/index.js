const express = require('express')

const app = express()

app.set('view engine', 'jade')

app.get('/', (req, res) => {
    res.render('index')
})

const server = app.listen(8080, () => {
    console.log('http://localhost:8080')
})