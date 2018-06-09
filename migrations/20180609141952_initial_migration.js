
exports.up = function (knex, Promise) {
  return knex.schema.createTable('totals', table => {
    table.increments('id').primary()
    table.integer('attempts')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('attemps')
}
