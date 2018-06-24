const { getGameDeck } = require('./newGame')
const { updateCount } = require('./db')

const path = require('path')
var express = require('express')
var router = express.Router()

// const game1Coordinates = String(process.env.game1Coordinates || '374912317521234')

router.post('/submit', function (req, res) {
  const game = Number(req.body.game)
  // if (game === 1) {
  //   return res.send({message: 'Congratulations!.  The coordinates are: ' + game1Coordinates})
  // }
  if (game === 2) {
    return res.send({message: 'Well done on completing the game.  There are no co-ordinates here.  Try again and pay more attention to the cards.'})
  }
  return res.send({message: 'Something strange has happened.  Either you tried cheating and failed badly or there has been an error'})
})

router.post('/getdeck', function (req, res) {
  let game = parseInt(req.query.game)
  if (!game || game > 2 || game < 1) {
    game = 1
  }
  updateCount(game)
  const deck = getGameDeck(game)
  return res.send({cardIds: deck})
})

router.get('/', function (req, res) {
  return res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
})

router.get('*', function (req, res) {
  return res.sendFile(path.resolve(__dirname, '../public', 'index.html'))
})

module.exports = router
