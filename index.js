// DECLARATION
const express = require('express')
const routerUsers = require('./routers/users.router')
const routerFiches = require('./routers/fichedefrais.router')
const routerAuthentification = require('./routers/authentification.router')
let api = express()

// RECUPERE LE BODY - DECODER LA REQUETE
api.use(express.json())

// PERMET DE COMMUNIQUER AVEC NOTRE API DEPUIS L EXTERIEUR
api.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT ,DELETE');
    next();
})

// USE METHODE EXPRESS : NE PAS OUBLIER EXPORT
api.use('/users', routerUsers)
api.use('/fiches', routerFiches)
api.use('/auth',routerAuthentification)

api.get('/', (request, response) => {
    response.json({status:'ok'})
})
const PORT = process.env.PORT || 3001;
api.listen(3001)
