import cardId from './cardId'

export function CardInfo ({ rank, index, name, color, id, symbol, isBack }) {
  return {
    id: id || cardId(rank, name),
    isBack: isBack || true,
    position: 0,
    name,
    rank,
    index,
    color,
    symbol
  }
}
