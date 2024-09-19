import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts } from "@/types/Items";

const HOST_BE = import.meta.env.VITE_API_BE;
const message = 'Bạn không có đủ quyền hạn cần thiết!'

export const sliceProduct = createApi({
    reducerPath: 'productApi',
    baseQuery: fetchBaseQuery({ baseUrl: HOST_BE }),
    endpoints: (builder) => ({
        getItemsClient: builder.query<IProducts[], { page: number | string, limit: number | string, category_id?: string | number }>({
            query: ({ page, limit, category_id }) => {
                if (category_id) {
                    return `/products/client?_page=${page}&_limit=${limit}&_category_id=${category_id}`;
                }
                return `/products/client?_page=${page}&_limit=${limit}`
            }
        }),
        getDetailItem: builder.query<IProducts, { id: string | number }>({
            query: ({ id }: { id: string | number }) => `/product/detail/${id}`
        }),
        getItemsDashboard: builder.query<IProducts[], { page: number | string, limit: number | string, category_id?: string | number }>({
            query: ({ page, limit, access_token }: { page: number | string, limit: number | string, access_token?: string }) => {
                if (access_token) {
                    return {
                        url: `/product/dashboard?_page=${page}&_limit=${limit}`,
                        method: 'GET',
                        headers: { 'Authorization': `Bearer ${access_token}` }
                    }
                }
                return message;
            }
        }),
        createItems: builder.mutation<void, { item: IProducts, access_token?: string }>({
            query: ({ item, access_token }: { item: IProducts, access_token?: string }) => {
                if (access_token) {
                    return {
                        url: `/product/dashboard/create`,
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${access_token}`
                        },
                        body: JSON.stringify(item)
                    }
                }
                return message;
            }
        }),
        updateItems: builder.mutation<void, { item: IProducts, access_token?: string }>({
            query: ({ item, access_token }: { item: IProducts, access_token?: string }) => {
                if (access_token) {
                    return {
                        url: `/product/dashboard/update/${item?._id}`,
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': `Bearer ${access_token}`
                        },
                        body: JSON.stringify(item)
                    }
                }
                return message
            }
        }),
        removeItems: builder.mutation<void, { _id_item: string | number, access_token?: string }>({
            query: ({ _id_item, access_token }: { _id_item: string | number, access_token?: string }) => {
                if (access_token) {
                    return {
                        url: `/product/dashboard/remove/${_id_item}`,
                        method: 'PATCH',
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    }
                }
                return message
            }
        }),
        restoreItems: builder.mutation<void, { _id_item: string | number, access_token?: string }>({
            query: ({ _id_item, access_token }: { _id_item: string | number, access_token?: string }) => {
                if (access_token) {
                    return {
                        url: `/product/dashboard/remove/${_id_item}`,
                        method: 'PATCH',
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    }
                }
                return message
            }
        }),
        deleteItems: builder.mutation<void, { _id_item: string | number, access_token?: string }>({
            query: ({ _id_item, access_token }: { _id_item: string | number, access_token?: string }) => {
                if (access_token) {
                    return {
                        url: `/product/dashboard/remove/${_id_item}`,
                        method: 'DELETE',
                        headers: {
                            'Authorization': `Bearer ${access_token}`
                        }
                    }
                }
                return message
            }
        })
    })
});

export const {
    useGetItemsClientQuery,
    useGetDetailItemQuery,
    useGetItemsDashboardQuery,
    useUpdateItemsMutation,
    useCreateItemsMutation,
    useRemoveItemsMutation,
    useRestoreItemsMutation,
    useDeleteItemsMutation,
} = sliceProduct