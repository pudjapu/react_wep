const express = require('express')
const app = express()
const data = require('./data.json')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req, res) => {
    res.send("wow")
})

app.get('/data', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data)
})

app.get('/data/root', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.root)
})

app.get('/data/root/:name', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.root.find(data => data.name === req.params.name))
})

app.get('/data/matrix', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.matrix)
})

app.get('/data/matrix/:name', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.matrix.find(data => data.name === req.params.name))
})

app.listen(4040, () => {
    console.log("port 4040")
})