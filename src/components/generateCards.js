import React from 'react'
import Card from './Card'

export default function generateCards (cardsInfo) {
  return cardsInfo
    .map(({ name, rank, symbol, id, color, isBack, index }) =>
      <Card key={id} id={id} index={index} name={name} rank={rank} symbol={symbol} color={color} isBack={isBack}/>
    )
}
