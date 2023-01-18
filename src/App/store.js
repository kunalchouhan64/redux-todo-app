import { configureStore } from '@reduxjs/toolkit'
import { todoreducers } from '../Redux/reducers/reducer'
// import rootreducers from '../Redux/reducers/Main'

export const store = configureStore({
  reducer: {
    todoreducers
  }

})