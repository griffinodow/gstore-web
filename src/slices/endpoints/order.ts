import { v4 as uuidv4 } from 'uuid'
import { apiSlice } from '../api'

export interface IOrder {
  success: string,
  data: {
    order: {
      id: string
      totalMoney: number
    }
  }
}

export interface ILineItemSubmit {
  itemId: string
  quantity: string
  catalogObjectId: string
}

const orderApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation<IOrder, { locationId: string, lineItems: ILineItemSubmit[] }>({
      query: ({ locationId, lineItems }) => ({
        url: 'order',
        method: 'POST',
        body: {
          locationId,
          lineItems,
          idempotencyKey: uuidv4()
        }
      })
    })
  }),
  overrideExisting: false
})

export const { useCreateOrderMutation } = orderApi
