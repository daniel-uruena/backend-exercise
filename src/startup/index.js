require('dotenv').config();
const express = require('express');

const clientRoutes = require('../components/clients')

const startServer = () => {
    const app = express();

    app.use('/mi-solucion', clientRoutes)

    const port = 3000;

    app.listen(port, () => {
        console.log('server running in port ' + port);
    })
}

module.exports = startServer;