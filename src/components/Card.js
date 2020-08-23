import classNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'
import { useDrag } from 'react-dnd'
import { ItemTypes } from '../cardsData'

export default function Card (props) {
  const { rank, symbol, name, id, isBack, isDeck } = props

  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.CARD, cardId: id },
    canDrag: monitor => !isBack,
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
    })
  })

  const cardClassName = classNames(isDeck ? 'deck' : 'card', `rank-${rank}`, name, { back: isBack })
  const cardStyle = {
    opacity: isDragging ? 0.5 : 1,
    cursor: isBack ? 'auto' : 'grab'
  }

  return (
    <div className="playingCards fourColours stack" ref={drag} style={cardStyle}>
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
  isBack: PropTypes.bool,
  isDeck: PropTypes.bool,
  id: PropTypes.string
}
