import { createSlice } from '@reduxjs/toolkit'
import { ItemTypes } from '../cardsData'
import generateCardsInfo from '../generateCardsInfo'

export const cardSlice = createSlice({
  name: ItemTypes.CARD,
  initialState: generateCardsInfo(),
  reducers: {
    move: (state, action) => {
      const { payload } = action
      const { cardId, newPosition } = payload

      const cardInfo = state.find(cardInfo => cardInfo.id === cardId)

      cardInfo.position = newPosition
    }
  }
})

export const { move } = cardSlice.actions

export const selectCards = state => state
