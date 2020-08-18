import PropTypes from 'prop-types'
import React from 'react'
import Card from './Card'
import CardsPositionCell from './CardsPositionCell'

export default function BottomCards ({ cards }) {
  return (
    <div className="columns my-4">
      <CardsPositionCell id={1} cards={cards} />
      <CardsPositionCell id={2} cards={cards} />
      <CardsPositionCell id={3} cards={cards} />
      <CardsPositionCell id={4} cards={cards} />
      <CardsPositionCell id={5} cards={cards} />
      <CardsPositionCell id={6} cards={cards} />
      <CardsPositionCell id={7} cards={cards} />
    </div>
  )
}

BottomCards.propTypes = {
  cards: PropTypes.arrayOf(Card).isRequired
}
