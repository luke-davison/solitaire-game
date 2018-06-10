const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]

const knex = require('knex')(config)

function updateCount (game) {
  knex('totals')
    .select()
    .where({game: game})
    .then(row => {
      if (!row.length) {
        knex('totals')
          .insert({attempts: 1, game})
          .then(() => console.log('First attempt at game', game))
      } else {
        knex('totals')
        .select()
        .where({game: game})
        .update({attempts: row[0].attempts + 1})
        .then(() => console.log('Game:', game, '- Total number of attempts:', row[0].attempts + 1))
      }
    })
}

module.exports = {updateCount}
