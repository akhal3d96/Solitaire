import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { ItemTypes } from '../cardsData'
import { flip, selectCards, stackPush } from '../features/cardSlice'
import findCard from '../findCard'
import findCards from '../findCards'
import { pipe } from '../helpers'
import CardCell from './CardCell'
import dropCard from './dropCard'
import generateCards from './generateCards'

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

  if (lastCard === undefined) return true
  if ((lastCard.index - toBeDroppedCard.index) !== 1) return false
  if (toBeDroppedCard.color === lastCard.color) return false

  return true
}

export default function CardsPositionCell ({ id, style = {} }) {
  const [isOver, setIsOver] = useState(false)
  const [cards, setCards] = useState([])
  const [lastCard, setLastCard] = useState()

  const { cardsInfo } = useSelector(selectCards)
  const dispatch = useDispatch()

  useEffect(() => {
    setCards(findCards(cardsInfo, 'position', id))
  }, [cardsInfo])

  useEffect(() => {
    setLastCard(cards[cards.length - 1])
  }, [cards])

  useEffect(() => {
    lastCard && pipe(flip, dispatch)(lastCard.id)
  }, [lastCard])

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    canDrop: (item, monitor) => rules(cardsInfo, item, lastCard, id),
    drop: item => {
      const draggedCardInfo = findCard(item.cardId, cardsInfo)

      cardsInfo
        .filter(cardInfo => {
          return cardInfo.position === draggedCardInfo.position &&
          cardInfo.stack >= draggedCardInfo.stack
        })
        .forEach(cardInfo => {
          dropCard(dispatch, { cardId: cardInfo.id }, id)
          const lastCardStack = lastCard ? lastCard.stack : 0
          pipe(stackPush, dispatch)({ cardId: cardInfo.id, stackNumber: lastCardStack + 1 })
        })

      setIsOver(false)
    },
    hover: () => setIsOver(true)
  })

  return (
    <CardCell ref={drop} style={style} isOver={isOver}>
      {generateCards(cards)}
    </CardCell>
  )
}

CardsPositionCell.propTypes = {
  id: PropTypes.number,
  style: PropTypes.object
}
