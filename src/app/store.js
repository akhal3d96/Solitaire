import { configureStore } from '@reduxjs/toolkit'
import { cardSlice } from '../features/cardSlice'

export default configureStore({
  reducer: {
    cardsInfo: cardSlice.reducer
  }
})
