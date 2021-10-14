const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('Tokyo')
})

router.get('/osaka', (req, res) => {
    res.render('Osaka')
})

router.get('/kioto', (req, res) => {
    res.render('kioto')
})

router.get('/hiroshima', (req, res) => {
    res.render('hiroshima')
})

router.get('/yokohama', (req, res) => {
    res.render('yokohama')
})

module.exports = router