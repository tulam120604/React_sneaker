import { GET_items_client } from "@/Services/Items/Products";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

const HOST_BE = import.meta.env.VITE_API_BE

export const sliceProduct = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: HOST_BE }),
    endpoints: (builder) => ({
        GET_items_client: builder.query({
            query: async ({ page, limit, category_id }: { page: number | string, limit: number, category_id: string | undefined }) => {
                return await GET_items_client(page, limit, category_id)
            }
        })
    })
})