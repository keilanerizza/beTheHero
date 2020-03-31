//up - o que quero que seja feito
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table) {
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        table.string('uf', 2).notNullable();
    });
};

//down - o que fazer se o up der errado
exports.down = function(knex) {
    return knex.schema.dropTable('ongs');
};
