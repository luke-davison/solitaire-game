const { getGame1Deck, getGame2Deck } = require('./newGame')

var express = require('express')
var router = express.Router()

router.post('/submit', function (req, res) {
  const game = Number(req.body.game)
  if (game === 1) {
    res.send({message: 'You win.  The coordinates are: ........'})
  } else {
    res.send({message: 'Did you cheat?'})
  }
})

router.get('/game1', function (req, res) {
  const deck = getGame1Deck()
  res.send({cardIds: deck})
})

router.get('/game2', function (req, res) {
  const deck = getGame2Deck()
  res.send({cardIds: deck})
})

module.exports = router
