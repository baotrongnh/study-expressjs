const path = require('path')
const express = require('express')
const app = express()
const port = 3000
const { create } = require('express-handlebars')

const handlebars = create({ extname: '.hbs' })

app.engine('hbs', handlebars.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resources/views'))

app.get('/', (req, res) => {
     res.render('home')
})

app.listen(port, () => {
     console.log('Example')
})
