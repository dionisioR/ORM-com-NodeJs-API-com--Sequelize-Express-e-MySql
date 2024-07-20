// const express = require ("express")
// const bodyParser = require('body-parser')

// const app = express();
// app.use(bodyParser.json());
// const port = 3000

// app.get('/teste', (req, res) => {
//   res
//     .status(200)
//     .send({mensagem: 'Hello World!'})
// })

// app.listen(port, () => {
//         console.log(`Servido rodando na porta ${port}!!!`)
//     }
// )

// module.exports = app

//--------------------------------------------------------
const express = require('express')
const routes = require('./routes')

const app = express()
const port = 3000

routes(app)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
module.exports = app