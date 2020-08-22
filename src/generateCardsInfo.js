import { CardInfo } from './CardInfo'
import { cardNumbers, cardSymbols } from './cardsData'
import { shuffle } from './helpers'

export default function generateCardsInfo () {
  const finalArray = []
  const cardsPositionArray = shuffle(cardSymbols
    .flatMap(({ name, symbol, color }) =>
      cardNumbers.map(({ rank, index }) => CardInfo({ rank, index, name, symbol, color }))
    )
  )

  for (let counter = 1; counter <= 7; counter++) {
    const cardPostionsSeg = cardsPositionArray
      .splice(0, counter)
      .map(card => {
        return {
          ...card, position: counter
        }
      })
    finalArray.push(cardPostionsSeg)
  }

  return finalArray.concat(cardsPositionArray).flat()
}
