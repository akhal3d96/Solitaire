export default function findCard (cardId, state) {
  return state.find(cardInfo => cardInfo.id === cardId)
}
