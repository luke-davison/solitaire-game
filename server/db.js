const environment = process.env.NODE_ENV || 'development'
const config = require('../knexfile')[environment]

const knex = require('knex')(config)

function updateCount () {
  knex('totals')
    .select()
    .then(row => {
      if (!row.length) {
        knex('totals')
          .insert({attempts: 1})
          .then(() => console.log('Number of attempts: 1'))
      } else {
        knex('totals')
        .select()
        .update({attempts: row[0].attempts + 1})
        .then(() => console.log('Number of attempts:', row[0].attempts + 1))
      }
    })
}

module.exports = {updateCount}
