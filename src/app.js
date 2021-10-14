const express = require('express')
const app = express()

const path = require('path')

const Tokyo = require('./routes/citys')

    app.use(express.urlencoded({extended: true}))
    app.use(express.json())

    app.set('views', path.join(__dirname, '../src'))
    app.engine('html', require('ejs').renderFile)
    app.set('view engine', 'html')

    app.use('*/css', express.static(path.join(__dirname + '/public/css')))
    app.use('*/img', express.static(path.join(__dirname + '/public/img')))
    app.use('*/js', express.static(path.join(__dirname + '/public/js')))

app.use('/city', Tokyo)

const PORT = 3000
app.listen(PORT, () => {
    console.log('<<===>> | SERVER ACTIVE | <<===>>')
})