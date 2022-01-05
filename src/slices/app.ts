import { createSlice, current, PayloadAction } from '@reduxjs/toolkit'

/**
 * Line item interface.
 */
export interface ILineItem {
  itemId: string
  quantity: number
  catalogObjectId: string
}

/**
 * App state interface.
 */
export interface IApp {
  lineItems: ILineItem[]
}

/**
 * Slice for local app state management.
 */
export const appSlice = createSlice({
  name: 'app',
  initialState: { lineItems: <ILineItem[]>[] } as IApp,
  reducers: {
    addLineItem: (state: IApp, action: PayloadAction<ILineItem>): void => {
      const index = current(state).lineItems.findIndex(item =>
        item.itemId === action.payload.itemId)
      if (index !== -1) {
        state.lineItems[index].quantity += action.payload.quantity
      } else {
        state.lineItems.push(action.payload)
      }
    },
    updateLineItem: (
      state: IApp,
      action: PayloadAction<{ id: string, quantity: number}>): void => {
      const index = current(state).lineItems.findIndex(item =>
        item.itemId === action.payload.id)
      if (index !== -1) {
        state.lineItems[index].quantity = action.payload.quantity
      }
    },
    removeLineItem: (state: IApp, action: PayloadAction<string>): void => {
      const index = current(state).lineItems.findIndex(item =>
        item.itemId === action.payload)
      if (index !== -1) {
        state.lineItems.splice(index, 1)
      }
    }
  }
})

export const { addLineItem, removeLineItem, updateLineItem } = appSlice.actions
