const express = require('express')
const app = express()
app.use(express.json())

let items = [
    {
        id: 1,
        myname: "rida"
    }
]

app.get('/', (req, res) =>{
    res.send("This is a new server")
})

app.get('/health', (req, res) =>{
    res.json({
        Status: 'OK',
        timestamp: new Date().toISOString(),
    })
})

app.get('/items', (req,res) =>{
    res.json(items)
})

app.post('/items', (req,res) => {
    const newItem = { id: items.length + 1, myname: req.body.myname}
    items.push(newItem)
    res.status(201).json(newItem)
})

app.listen(3000, () => {
    console.log("server is running on http://localhost:3000")
})