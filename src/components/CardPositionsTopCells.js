import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { useDrop } from 'react-dnd'
import { useSelector, useDispatch } from 'react-redux'
import { ItemTypes } from '../cardsData'
import { selectCards } from '../features/cardSlice'
import Card from './Card'
import CardCell from './CardCell'
import dropCard from './dropCard'
import findCards from './findCards'

function initialDropRule (stackSymbol, currentStackCardsIndex, cardId) {
  return !stackSymbol /* is null */ &&
  !currentStackCardsIndex /* is zero */ &&
  !cardId /* is zero */
}

function rules (cardsInfo, item, stackSymbol, currentStackCardsIndex, setStackSymbol, setCurrentStackCardsIndex) {
  const cardInfo = cardsInfo.find(cardInfo => cardInfo.id === item.cardId)
  // Initial
  if (initialDropRule(stackSymbol, currentStackCardsIndex, cardInfo.index)) return true

  // Check symbol
  if (cardInfo.symbol !== stackSymbol) return false

  // Check index
  if (cardInfo.index === currentStackCardsIndex) return true

  return false
}

export default function CardPositionsTopCells ({ id, style = {}, cards }) {
  const [isOver, setIsOver] = useState(false)
  const [currentStackCardsIndex, setCurrentStackCardsIndex] = useState(0)
  const [stackSymbol, setStackSymbol] = useState()

  const { cardsInfo } = useSelector(selectCards)
  const dispatch = useDispatch()

  const Cards = findCards(cards, cardsInfo, id)

  const [, drop] = useDrop({
    accept: ItemTypes.CARD,
    canDrop: (item, monitor) => rules(cardsInfo, item, stackSymbol, currentStackCardsIndex, setStackSymbol, setCurrentStackCardsIndex),
    drop: item => {
      if (initialDropRule(stackSymbol, currentStackCardsIndex, item.cardId)) {
        const cardInfo = cardsInfo.find(cardInfo => cardInfo.id === item.cardId)
        setStackSymbol(cardInfo.symbol)
        setCurrentStackCardsIndex(currentStackCardsIndex + 1)
      }
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

CardPositionsTopCells.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  cards: PropTypes.arrayOf(Card).isRequired
}
