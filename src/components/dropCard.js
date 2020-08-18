import { move } from '../features/cardSlice'
import newCardPosition from '../newCardPosition'

export default function dropCard (dispatch, item, id) {
  const payload = newCardPosition(item.cardId, id)
  return dispatch(move(payload))
}
