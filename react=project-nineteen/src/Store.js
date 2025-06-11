import { configureStore } from '@reduxjs/toolkit'
import PasteReducer from './redux/PasteSlice'

export const store = configureStore({
  reducer: {
    Paste:PasteReducer
  },
})