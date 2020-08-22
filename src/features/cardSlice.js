import { createSlice } from '@reduxjs/toolkit'
import { ItemTypes } from '../cardsData'
import findCard from '../findCard'
import generateCardsInfo from '../generateCardsInfo'

export const cardSlice = createSlice({
  name: ItemTypes.CARD,
  initialState: generateCardsInfo(),
  reducers: {
    move: (state, action) => {
      const { payload } = action
      const { cardId, newPosition } = payload

      const cardInfo = findCard(cardId, state)

      cardInfo.position = newPosition
    },
    flip: (state, action) => {
      const cardId = action.payload
      const cardInfo = findCard(cardId, state)

      cardInfo.isBack = false
      cardInfo.stack = 0
    },
    stackPush: (state, action) => {
      const { payload } = action
      const { cardId, stackNumber } = payload

      const cardInfo = findCard(cardId, state)
      cardInfo.stack = stackNumber
    }
  }
})

export const { move, flip, stackPush } = cardSlice.actions

export const selectCards = state => state
