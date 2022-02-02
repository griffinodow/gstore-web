import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

/**
 * Slice for api queries.
 */
export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://api-g-store.griffindow.com/' }),
  tagTypes: ['Catalog'],
  endpoints: () => ({})
})
