
exports.up = function (knex, Promise) {
  knex.schema.createTable('totals', (table) => {
    table.increments()
    table.integer('attempts')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('attemps')
}
