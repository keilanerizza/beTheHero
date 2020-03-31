const crypto = require('crypto');
const connection = require('../database/connection');

/**
 * Parâmetros
 * - Query Params: enviados na rota após '?'
 * - Route Params: para identificar recursos 'rota/1'
 * - Request Body: corpo da requisição
 */

module.exports = {

    async index (request, response) {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },

    async create(request, response) {
        const { name, email, whatsapp, city, uf } = request.body;

        const id = crypto.randomBytes(4).toString('HEX');

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        
        return response.json({id});
    }
}