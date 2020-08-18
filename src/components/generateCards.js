import React from 'react'
import { cardNumbers, cardSymbols } from '../cardsData'
import Card from './Card'
import cardId from '../cardId'

export default function generateCards () {
  return cardSymbols.flatMap(cardSymbol /* Symbol name */ =>
    cardNumbers.map(cardNumber => {
      const generatedCardId = cardId(cardNumber.rank, cardSymbol.name)

      return <Card key={generatedCardId} index={cardNumber.index} rank={cardNumber.rank}
        symbol={cardSymbol.symbol} name={cardSymbol.name} id={generatedCardId}
        color={cardSymbol.color} />
    })
  )
}
