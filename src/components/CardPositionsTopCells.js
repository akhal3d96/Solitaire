import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { ItemTypes } from '../cardsData'
import { selectCards } from '../features/cardSlice'
import findCards from '../findCards'
import CardCell from './CardCell'
import dropCard from './dropCard'
import generateCards from './generateCards'

function initialDropRule (stackSymbol, currentStackCardsIndex, cardId) {
  return !stackSymbol /* is undefined */ &&
  !currentStackCardsIndex /* is zero */ &&
  !cardId /* is zero */
}

function rules (cardsInfo, item, stackSymbol, currentStackCardsIndex) {
  const cardInfo = cardsInfo.find(cardInfo => cardInfo.id === item.cardId)

  // Initial
  if (initialDropRule(stackSymbol, currentStackCardsIndex, cardInfo.index)) return true

  // Check symbol
  if (cardInfo.symbol !== stackSymbol) return false

  // Check index
  if (cardInfo.index === currentStackCardsIndex) return true

  // if ((currentStackCardsIndex - cardInfo.index) === 1) return true
  return false
}

export default function CardPositionsTopCells ({ id, style = {} }) {
  const [isOver, setIsOver] = useState(false)
  const [currentStackCardsIndex, setCurrentStackCardsIndex] = useState(0)
  const [stackSymbol, setStackSymbol] = useState()

  const { cardsInfo } = useSelector(selectCards)
  const dispatch = useDispatch()

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    canDrop: (item, monitor) => rules(cardsInfo, item, stackSymbol, currentStackCardsIndex),
    drop: item => {
      const cardInfo = cardsInfo.find(cardInfo => cardInfo.id === item.cardId)
      if (initialDropRule(stackSymbol, currentStackCardsIndex, item.index)) {
        setStackSymbol(cardInfo.symbol)
      }

      setCurrentStackCardsIndex(currentStackCardsIndex + 1)
      setIsOver(false)
      dropCard(dispatch, item, id)
    },
    hover: () => setIsOver(true)
  })

  const cards = findCards(cardsInfo, 'position', id)

  return (
    <CardCell ref={drop} style={style} isOver={isOver}>
      {generateCards(cards)}
    </CardCell>
  )
}

CardPositionsTopCells.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object
}
