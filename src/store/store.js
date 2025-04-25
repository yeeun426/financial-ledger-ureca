import { configureStore } from '@reduxjs/toolkit'
import { moneySlice } from './moneySlice'

export default configureStore({
  reducer: {
    money: moneySlice.reducer,
  },
})
