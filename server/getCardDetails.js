function getCardDetails (cardId) {
  const value = getValue(cardId)
  return {cardId, value}
}

function getValue (cardId) {
  return cardId % 13 + 1
}

module.exports = getCardDetails
