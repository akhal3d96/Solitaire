function indexValue (e) {
  return e.isBack ? Infinity : e.index
}

export default function findCards (cardsStore, key, value) {
  return cardsStore
    .filter(cardInfo => cardInfo[key] === value)
    .sort((a, b) => {
      const aIndex = indexValue(a)
      const bIndex = indexValue(b)

      return bIndex - aIndex
    })
}
