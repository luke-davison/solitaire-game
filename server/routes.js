const { getGame1Deck, getGame2Deck } = require('./newGame')
const { updateCount } = require('./db')

var express = require('express')
var router = express.Router()

const game1Coordinates = String(process.env.game1Coordinates || '374912317521234')

router.post('/submit', function (req, res) {
  const game = Number(req.body.game)
  if (game === 1) {
    res.send({message: 'You win.  The coordinates are: ' + game1Coordinates})
  } else {
    res.send({message: 'Well, you beat the game but you didn\'t find the coordinates.  Try looking a bit harder'})
  }
})

router.get('/game1', function (req, res) {
  updateCount()
  const deck = getGame1Deck()
  res.send({cardIds: deck})
})

router.get('/game2', function (req, res) {
  updateCount()
  const deck = getGame2Deck()
  res.send({cardIds: deck})
})

module.exports = router
