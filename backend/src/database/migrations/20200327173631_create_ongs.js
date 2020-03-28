
exports.up = function(knex) {
  return knex.schema.createTable('ongs', function (table) {
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('password').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
      table.string('token');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};
