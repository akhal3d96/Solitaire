import PropTypes from 'prop-types'
import React from 'react'
import Card from './Card'
import CardPositionsTopCells from './CardPositionsTopCells'
import Deck from './Deck'

export default function TopCards ({ cards }) {
  return (
    <div className="columns top-column">
      <Deck/>
      <CardPositionsTopCells id="A" cards={cards} style={{ marginRight: '15rem' }} />
      <CardPositionsTopCells id="B" cards={cards} />
      <CardPositionsTopCells id="C" cards={cards} />
      <CardPositionsTopCells id="D" cards={cards} />
      <CardPositionsTopCells id="E" cards={cards} />
    </div>
  )
}

TopCards.propTypes = {
  cards: PropTypes.arrayOf(Card)
}
