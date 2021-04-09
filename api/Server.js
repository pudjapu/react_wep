const express = require('express')
const app = express()
const members = require('./member.json')
const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/',(req, res) => {
    res.send("wow")
})

app.get('/member', (req, res) => {
    res.json(members)
})

app.get('/member/:id', (req, res) => {
    res.json(members.find(member => member.id === req.params.id))
})

app.post('/member', (req, res) => {
    members.push(req.body)
    res.status(201).json(req.body)
})

app.put('/member/:id',(req , res) => {
    const updateIndex = members.findIndex(member => member.id === req.params.id)
    res.json(Object.assign(members[updateIndex], req.body))
})

app.delete('/member/:id' , (req, res) => {
    const deletedIndex = members.findIndex(member => member.id === req.params.id)
    members.splice(deletedIndex, 1)
    res.status(204).send()
})

app.listen(4200, () => {
    console.log("port 4200")
})