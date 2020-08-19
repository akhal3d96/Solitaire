import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { useDrag } from 'react-dnd'
import { useSelector } from 'react-redux'
import { ItemTypes } from '../cardsData'
import { selectCards } from '../features/cardSlice'
import findCard from '../findCard'

export default function Card (props) {
  const { rank, symbol, name, id } = props

  const { cardsInfo } = useSelector(selectCards)
  const { isBack } = findCard(id, cardsInfo)

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, cardId: props.id },
    canDrag: monitor => !isBack,
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const cardClassName = classNames('card', `rank-${rank}`, name, { back: isBack })
  const cardStyle = { opacity: isDragging ? 0.5 : 1 }

  return (
    <div className="playingCards fourColours" ref={drag} style={cardStyle}>
      <div className={cardClassName} >
        {!isBack &&
        (<>
          <span className="rank">{rank}</span>
          <span className="suite">{symbol}</span>
        </>)
        }
      </div>
    </div>
  )
}

Card.propTypes = {
  rank: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
  color: PropTypes.string,
  id: PropTypes.string
}
