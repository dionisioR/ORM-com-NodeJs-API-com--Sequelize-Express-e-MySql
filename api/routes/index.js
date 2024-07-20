const bodyParser = require('body-parser')
const pessoas = require('./pessoaRouter')
const niveis = require('./niveisRouter')
const turmas = require('./turmasRouter')

module.exports = (app) => {
    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turmas
    )
    app.get('/', (req, res) => res.send({message: 'Olá mundo!!'}))
}
//--------------------------------------------------------
// const bodyParser = require('body-parser')
 
// const pessoas = require('./pessoaRouter')
// const niveis = require('./niveisRouter')
// const turmas = require('./turmasRouter')

// module.exports = app => {
//  app.use(
//    bodyParser.json(),
//    pessoas,
//    niveis,
//    turmas
//    )
//  }
