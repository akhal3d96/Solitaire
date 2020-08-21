import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { ItemTypes } from '../cardsData'
import { flip, selectCards } from '../features/cardSlice'
import { pipe } from '../helpers'
import Card from './Card'
import CardCell from './CardCell'
import dropCard from './dropCard'
import findCards from './findCards'
import findCard from '../findCard'

function isAtTopCells (cardsCellId) {
  const cardsCellCode = cardsCellId.toString().charCodeAt()
  const firstCell = 'B'.charCodeAt()
  const lastCell = 'E'.charCodeAt()

  if (cardsCellCode <= firstCell || cardsCellCode >= lastCell) return false

  return true
}

function rules (store, item, lastCard, cardsCellId) {
  const { cardId } = item
  const toBeDroppedCard = findCard(cardId, store)

  if (isAtTopCells(cardsCellId)) return false

  if ((lastCard.index - toBeDroppedCard.index) !== 1) return false
  if (toBeDroppedCard.color === lastCard.color) return false

  return true
}

export default function CardsPositionPosition ({ id, style = {}, cards }) {
  const [isOver, setIsOver] = useState(false)

  const { cardsInfo } = useSelector(selectCards)
  const dispatch = useDispatch()

  const Cards = findCards(cards, cardsInfo, id)
  const lastCard = Cards[Cards.length - 1].props || null

  pipe(flip, dispatch)(lastCard.id)

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    canDrop: (item, monitor) => rules(cardsInfo, item, lastCard, id),
    drop: item => {
      setIsOver(false)
      dropCard(dispatch, item, id)
    },
    hover: () => setIsOver(true)
  })

  return (
    <CardCell ref={drop} style={style} isOver={isOver}>
      {Cards}
    </CardCell>
  )
}

CardsPositionPosition.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  cards: PropTypes.arrayOf(Card).isRequired
}
