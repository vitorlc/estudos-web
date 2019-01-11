const port = 3003;
const express = require('express') 
const app = express()
const db = require('./db')
const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/produtos', (req, res) => {
    res.send(db.getProdutos())
})

app.get('/produto/:id', (req, res) => {
    res.send(db.getProduto(req.params.id))
})

app.post('/produto',(req, res) => {
    const produto = db.salvarProduto({
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.put('/produto/:id', (req, res) => {
    const produto = db.salvarProduto({
        id: req.params.id,
        nome: req.body.name,
        preco: req.body.preco
    })
    res.send(produto)
})

app.delete('/produto/:id', (req, res) =>{
    const produto = db.deleteProduto(req.params.id)
    res.send(produto)
})

app.listen(port, () => {
    console.log(`Servidor executando na porta ${port}.`)
})

