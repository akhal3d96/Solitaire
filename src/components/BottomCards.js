import React from 'react'
import CardsPositionCell from './CardsPositionCell'

export default function BottomCards () {
  return (
    <div className="columns my-4">
      <CardsPositionCell id={1} />
      <CardsPositionCell id={2} />
      <CardsPositionCell id={3} />
      <CardsPositionCell id={4} />
      <CardsPositionCell id={5} />
      <CardsPositionCell id={6} />
      <CardsPositionCell id={7} />
    </div>
  )
}
