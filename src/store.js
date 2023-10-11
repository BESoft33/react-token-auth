import { configureStore } from '@reduxjs/toolkit'
import cartSliceReducer from './cartSlice'
import tokenSliceReducer from './tokenSlice'

export default configureStore({
  reducer: {
    cart: cartSliceReducer,
    token: tokenSliceReducer,
  }
})