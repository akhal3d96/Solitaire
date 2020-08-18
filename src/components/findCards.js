export default function findCards (cards, cardsInfo, CurrentPosition) {
  return cards
    .filter(card => cardsInfo
      .find(cardInfo => cardInfo.id === card.props.id)
      .position === CurrentPosition
    )
    .sort((a, b) => b.props.index - a.props.index)
}
