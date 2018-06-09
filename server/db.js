const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]

const knex = require('knex')(config)

function updateCount () {
  knex('totals')
    .select()
    .returning('attempts')
    .then(attempts => {
      knex('totals')
      .select()
      .update({attempts: attempts++})
      .then(() => console.log('Number of attempts:', attempts))
    })
}

module.exports = {updateCount}
