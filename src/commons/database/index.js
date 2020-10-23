const Sequelize = require('sequelize')
const cache = require('../cache')

const expirationTime = 60 * 5;

const user = process.env.DBUSER;
const pass = process.env.DBPASSWORD;
const host = process.env.DBHOST;
const port = process.env.DBPORT;
const database = process.env.DBNAE;

const db = new Sequelize(`mysql://${user}:${pass}@${host}:${port}/${database}`, { operatorAliases: false })

const connect = () => {
    db.authenticate().then(() => {
        console.log('Base de datos conectada');
    }).catch(error => {
        console.error(error);
    })
}

const close = () => {
    db.close();
}

/**
 * Consulta un cliente buscandolo por Id primero en cache y si no lo 
 * encuentra lo busca en base de datos y lo guarda en caché
 * @param {Number} idClient : Id del cliente que se quiere consultar
 */
const getClientById = async(idClient) => {
    let client = cache.get(idClient)
    if (!client) { // Si el cliente no está en caché, lo consulta en la base de datos
        console.log('Consultando en la BD');
        connect() // Abre la conexión a la base de datos
        const query = `SELECT * FROM Personas WHERE Id = ${idClient}`;
        const results = await db.query(query, { type: Sequelize.QueryTypes.SELECT })
        if (results.length > 0) { // Si el cliente está en la base datos lo guarda en la cache durante 5 minutos (expirationTime)
            client = results[0]
            cache.set(idClient, client, expirationTime)
        }
        close() // Cierra la conexión a la base de datos
    } else {
        console.log('Cliente encontrado en caché');
    }
    return client;
}

module.exports = {
    getClientById
}