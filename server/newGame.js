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
  const coordinateCards = String(process.env.game2Coordinates || '374912317521234').split('').map(num => parseInt(num))
  console.log(coordinateCards)
  const predefinedPositions = []
  for (let i = 0; i < coordinateCards.length; i++) {
    let position = 1
    switch (i) {
      case 0: position = 24; break
      case 1: position = 26; break
      case 2: position = 29; break
      case 3: position = 33; break
      case 4: position = 38; break
      case 5: position = 44; break
      case 6: position = 51; break
      case 7: position = 21; break
      case 8: position = 18; break
      case 9: position = 15; break
      case 10: position = 12; break
      case 11: position = 9; break
      case 12: position = 6; break
      case 13: position = 3; break
      case 14: position = 0; break
    }
    predefinedPositions.push({position, value: coordinateCards[i]})
  }
  console.log(JSON.stringify(predefinedPositions))
  const allCards = []
  for (let i = 0; i < 52; i++) {
    allCards.push(getCardDetails(i))
  }

  predefinedPositions.forEach(position => {
    const possibleCards = allCards.reduce((arr, card, i) => {
      if (card.value === position.value) {
        arr.push({oldPosition: i, card})
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
      deck.push(alreadyDefined.card)
    } else {
      deck.push(allCards.splice(Math.floor(Math.random() * allCards.length), 1)[0])
    }
  }
  return deck.map(obj => obj.cardId)
}

module.exports = {getGame1Deck, getGame2Deck}
