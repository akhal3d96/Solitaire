import PropTypes from 'prop-types'
import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../cardsData'
import mergeClassNames from '../mergeClassNames'

export default function Card (props) {
  const { rank, symbol, name } = props

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, cardId: props.id },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const cardClassName = mergeClassNames('card', `rank-${rank}`, name)
  const cardStyle = { opacity: isDragging ? 0.5 : 1 }

  return (
    <div className="playingCards fourColours" ref={drag} style={cardStyle}>
      <div className={cardClassName} >
        <span className="rank">{rank}</span>
        <span className="suite">{symbol}</span>
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
