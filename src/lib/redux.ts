import { configureStore } from '@reduxjs/toolkit'
import { apiSlice } from '../slices/api'
import { appSlice } from '../slices/app'

/**
 * The redux store for state management.
 */
export const store = configureStore({
  reducer: {
    app: appSlice.reducer,
    [apiSlice.reducerPath]: apiSlice.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware)
})

export type RootState = ReturnType<typeof store.getState>
