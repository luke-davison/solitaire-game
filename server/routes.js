const { getGameDeck } = require('./newGame')
const { updateCount } = require('./db')

var express = require('express')
var router = express.Router()

const game1Coordinates = String(process.env.game1Coordinates || '374912317521234')

router.post('/submit', function (req, res) {
  const game = Number(req.body.game)
  if (game === 1) {
    return res.send({message: 'Congratulations!.  The coordinates are: ' + game1Coordinates})
  }
  if (game === 2) {
    return res.send({message: 'Well, you beat the game but you didn\'t find the coordinates.  Try looking a bit harder'})
  }
  return res.send({message: 'Something strange has happened.  Either you tried cheating and failed badly or there has been an error'})
})

router.post('/getdeck', function (req, res) {
  let game = parseInt(req.query.game)
  if (!game) {
    game = 1
  }
  updateCount(game)
  const deck = getGameDeck(game)
  return res.send({cardIds: deck})
})

module.exports = router
