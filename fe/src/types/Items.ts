export interface IAttribute {
    varriants?: [
        color: string,
        size: [
            {
                name_size?: string,
                stock: number,
                price: number,
                sale_quantity: number
            }
        ]
    ]
}

export interface ICategory {
    name_category: string
}

export interface IProducts {
    _id?: string,
    name_product?: string,
    gallery_product?: [string],
    description_product?: string,
    featured_product?: boolean,
    stock?: number,
    attributes?: IAttribute,
    category_id?: ICategory,
}