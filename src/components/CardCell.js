import React from 'react'
import PropTypes from 'prop-types'

export const CardCell = React.forwardRef((props, ref) => {
  const { children, isOver, style } = props

  const cardPositionStyle = Object.assign(isOver ? { backgroundColor: '#FFFF00' } : {}, style)

  return (
    <div className="column" ref={ref}>
      <div className='card-position deck' style={cardPositionStyle} >
        {children}
      </div>
    </div>
  )
})

CardCell.displayName = 'CardCell'
CardCell.propTypes = {
  children: PropTypes.array,
  style: PropTypes.object,
  isOver: PropTypes.bool
}

export default CardCell
