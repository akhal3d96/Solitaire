
export const cardSymbols = [
  { name: 'clubs', symbol: '♣', color: 'black' },
  { name: 'diams', symbol: '♦', color: 'red' },
  { name: 'hearts', symbol: '♥', color: 'red' },
  { name: 'spades', symbol: '♠', color: 'black' }
]

export const cardNumbers = [
  'A',
  '2', '3', '4', '5', '6', '7', '8', '9', '10',
  'J', 'Q', 'K'
].map((rank, index) => ({ rank, index }))

export const ItemTypes = {
  CARD: 'card'
}
