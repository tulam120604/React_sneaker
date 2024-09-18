const HOST_BE = import.meta.env.VITE_API_BE;
import { IProducts } from '@/types/Items';
import axios from 'axios';

// CLIENT
export async function GET_items_client(page: number | string, limit: number, category_id: string | undefined): Promise<IProducts[]> {
    let endpoint = `${HOST_BE}/product?_page=${page}&_limit=${limit}`;
    if (category_id) {
        endpoint = `${HOST_BE}/product?_category_id=${category_id}&_limit=${limit}`;
    }
    const res =  await axios.get(endpoint);
    return res.data
}

export async function GET_detail_item(id: string | number) {
    try {
        const endpoint = `${HOST_BE}/product/${id}`;
        const res = await axios.get(endpoint);
        return res
    } catch (error) {
        return error
    }
}

// DASHBOARD
export async function GET_items_dashboard(page: number | number, limit: number) {
    try {
        const endpoint = `${HOST_BE}/product/dashboard?_page=${page}&_limit=${limit}`;
        const res = await axios.get(endpoint);
        return res
    } catch (error) {
        return error
    }
}

export async function POST_item_dashboard(item: IProducts, access_token?: string) {
    try {
        if (access_token) {
            const endpoint = `${HOST_BE}/product/dashboard/create`;
            const res = await axios.post(endpoint, item, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            });
            return res
        }
        else {
            return 'Bạn không có quyền hạn cần thiết!'
        }
    } catch (error) {
        return error
    }
}

export async function PUT_item_dashboard(item: IProducts, access_token?: string) {
    try {
        const endpoint = `${HOST_BE}/product/dashboard/update`;
        if (access_token) {
            const res = await axios.put(endpoint, item, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
            return res
        }
        else {
            return 'Bạn không có quyền hạn cần thiết!'
        }
    } catch (error) {
        return error
    }
}

export async function REMOVE_item_dashboad(access_token?: string, id?: string | number) {
    try {
        const endpoint = `${HOST_BE}/product/dashboard/remove/${id}`;
        if (access_token) {
            const res = await axios.patch(endpoint, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
            return res
        } else {
            return 'Bạn không có quyền hạn cần thiết!'
        }
    } catch (error) {
        return error
    }
}


export async function DELETE_item_dashboad(access_token?: string, id?: string | number) {
    try {
        const endpoint = `${HOST_BE}/product/dashboard/delete/${id}`;
        if (access_token) {
            const res = await axios.patch(endpoint, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
            return res
        } else {
            return 'Bạn không có quyền hạn cần thiết!'
        }
    } catch (error) {
        return error
    }
}

export async function RESTORE_item_dashboad(access_token?: string, id?: string | number) {
    try {
        const endpoint = `${HOST_BE}/product/dashboard/restore/${id}`;
        if (access_token) {
            const res = await axios.patch(endpoint, {
                headers: {
                    Authorization: `Bearer ${access_token}`
                }
            })
            return res
        } else {
            return 'Bạn không có quyền hạn cần thiết!'
        }
    } catch (error) {
        return error
    }
}