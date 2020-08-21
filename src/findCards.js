export default function findCards (cardsStore, key, value) {
  return cardsStore.filter(cardInfo => cardInfo[key] === value)
}
