import { v4 as uuidv4 } from 'uuid'
import { apiSlice } from '../api'

const paymentApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createPayment: builder.mutation<void, { sourceId: string, orderId: string }>({
      query: ({ sourceId, orderId }) => ({
        url: 'payment',
        method: 'POST',
        body: {
          sourceId,
          orderId,
          idempotencyKey: uuidv4()
        }
      })
    })
  }),
  overrideExisting: false
})

export const { useCreatePaymentMutation } = paymentApi
