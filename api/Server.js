const express = require('express')
const app = express()
const data = require('./data.json')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

function intercep(req, res, next){
    const mkey = '45134Asd4864wadfad'
    const {key} = req.query

    if(key === mkey){
        next();
    }
    else{
        res.json({error: "token invalid"})
    }

}

app.get('/',(req, res) => {
    res.send("wow")
})

app.post('/data', intercep , (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data)
})

app.post('/data/root', intercep , (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.root)
})

app.post('/data/root/:name', intercep , (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.root.find(data => data.name === req.params.name))
})

app.post('/data/matrix', intercep , (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.matrix)
})

app.post('/data/matrix/:name', intercep , (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.matrix.find(data => data.name === req.params.name))
})

app.post('/data/interpolation', intercep , (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.interpolation)
})

app.post('/data/interpolation/:name', intercep , (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json(data.interpolation.find(data => data.name === req.params.name))
})

app.listen(4040, () => {
    console.log("port 4040")
})