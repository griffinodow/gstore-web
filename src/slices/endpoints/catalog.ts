import { apiSlice } from '../api'

export interface IItemVariation {
  id: string
  itemId: string
  price: number
}

export interface IItem {
  id: string
  categoryId: string
  name: string
  description: string
  url: string
  variations: IItemVariation[]
}

export interface ICategory {
  id: string
  name: string
}

export interface ICatalog {
  success: string
  data: {
    catalog: {
      locationId: string
      categories: ICategory[]
      items: IItem[]
    }
  }
}

const catalogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCatalog: builder.query<ICatalog, void>({
      query: () => 'catalog'
    })
  }),
  overrideExisting: false
})

export const { useGetCatalogQuery } = catalogApi
