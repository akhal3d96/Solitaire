import cardId from './cardId'

export function CardInfo ({ rank, index, name, color, id, symbol }) {
  return {
    id: id || cardId(rank, name),
    position: 0,
    name,
    rank,
    index,
    color,
    symbol
  }
}
