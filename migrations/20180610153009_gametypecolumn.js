
exports.up = function (knex, Promise) {
  return knex.schema.table('totals', table => {
    table.integer('game')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('totals', table => {
    table.dropColumn('game')
  })
}
