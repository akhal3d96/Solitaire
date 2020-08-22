import cardId from './cardId'

export function CardInfo ({ rank, index, name, color, id, symbol, isBack, stack }) {
  return {
    id: id || cardId(rank, name),
    isBack: isBack || true,
    stack: stack || Infinity,
    position: 0,
    name,
    rank,
    index,
    color,
    symbol
  }
}
