import { apiSlice } from '../api'

/**
 * Item variation interface.
 */
export interface IItemVariation {
  id: string
  itemId: string
  price: number
}

/**
 * Item interface.
 */
export interface IItem {
  id: string
  categoryId: string
  name: string
  description: string
  url: string
  variations: IItemVariation[]
}

/**
 * Category interface.
 */
export interface ICategory {
  id: string
  name: string
}

/**
 * Catalog interface.
 */
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

/**
 * Catalog endpoint in the api slice.
 */
const catalogApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCatalog: builder.query<ICatalog, void>({
      query: () => 'catalog'
    })
  }),
  overrideExisting: false
})

export const { useGetCatalogQuery } = catalogApi
