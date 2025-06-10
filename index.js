const express = require('express');

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send ('Deu certoate aqui    espero que continue')
})

app.get('/lista', (req, res) => {
    res.send (
        [
            {
                nome: 'ana',
                pontos: 100,
                resultado: 'aprovado'
            },
            {
                nome: 'pedro',
                pontos: 10,
                resultado: 'reprovado'
            }
        ]

    )
})



app.listen(port, () => {
    console.log(`Server running port ${port}`)
})
