const getCardDetails = require('./getCardDetails')

function getGame1Deck () {
  const allCards = []
  for (let i = 0; i < 52; i++) {
    allCards.push(getCardDetails(i))
  }
  const deck = []
  for (let i = 0; i < 52; i++) {
    deck.push(allCards.splice(Math.floor(Math.random() * allCards.length), 1)[0].cardId)
  }
  return deck
}

function getGame2Deck () {
  const predefinedPositions = [
    { position: 5, value: 8 },
    { position: 8, value: 5 },
    { position: 11, value: 7 },
    { position: 14, value: 1 },
    { position: 17, value: 5 },
    { position: 20, value: 7 },
    { position: 23, value: 1 },
    { position: 4, value: 2 },
    { position: 7, value: 1 },
    { position: 10, value: 6 },
    { position: 13, value: 4 },
    { position: 16, value: 7 },
    { position: 19, value: 3 },
    { position: 22, value: 10 }
  ]
  const allCards = []
  for (let i = 0; i < 52; i++) {
    allCards.push(getCardDetails(i))
  }
  predefinedPositions.forEach(position => {
    const possibleCards = allCards.reduce((arr, card, i) => {
      if (card.value === position.value) {
        arr.push({ oldPosition: i, card })
      }
      return arr
    }, [])
    const chosenCard = allCards.splice(possibleCards[Math.floor(Math.random() * possibleCards.length)].oldPosition, 1)
    if (chosenCard[0]) {
      position.card = chosenCard[0]
    }
  })
  const deck = []
  for (let i = 0; i < 52; i++) {
    const alreadyDefined = predefinedPositions.find(position => position.position === i)
    if (alreadyDefined && alreadyDefined.card) {
      deck.push(alreadyDefined.card.cardId)
    } else {
      deck.push(allCards.splice(Math.floor(Math.random() * allCards.length), 1)[0].cardId)
    }
  }
  return deck
}

module.exports = {getGame1Deck, getGame2Deck}
