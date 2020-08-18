import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { move, selectCards } from '../features/cardSlice'
import { pipe, shuffle } from '../helpers'
import newCardPosition from '../newCardPosition'

function selectRandomCard (cardsInfo, drawCard) {
  const card = shuffle(cardsInfo).find(cardInfo => cardInfo.position === 0)
  drawCard(card.id)
}

export default function Deck () {
  const { cardsInfo } = useSelector(selectCards)
  const dispatch = useDispatch()
  const [prevCardId, setPrevCardId] = useState(null)

  const drawCard = cardId => {
    if (prevCardId) {
      const cardState = cardsInfo.find(cardState => cardState.id === prevCardId)

      if (cardState.position === 'A') pipe(move, dispatch)(newCardPosition(prevCardId, 0))
    }
    // Draw a new card
    const newCardPositionInfo = newCardPosition(cardId, 'A')
    // console.log(newCardPositionInfo)
    pipe(move, dispatch)(newCardPositionInfo)
    setPrevCardId(newCardPositionInfo.cardId)
  }

  return (
    <div className="column" onClick={() => selectRandomCard(cardsInfo, drawCard)}>
      <div className="playingCards">
        <div className="card back" >
        </div>
      </div>
    </div>
  )
}

Deck.propTypes = {
  cardsPosition: PropTypes.array
}
