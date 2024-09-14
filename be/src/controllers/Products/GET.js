import Products from "../../models/Items/products.js";
import { StatusCodes } from 'http-status-codes';

// dashboard
export async function GET_product_dashboard(req, res) {
    try {
        const {
            _page = 1,
            _limit = 20,
            _search = ''
        } = req.query;
        const options = {
            page: _page,
            limit: _limit
        };
        const querry = {
            sort: { createdAt: -1 }
        }
        if (_search) {
            querry.$and = {
                name_product: { $regex: new RegExp(_search, 'i') }
            }
        }
        const data = await Products.paginate(querry, options);
        await Products.populate(data.docs, { path: 'Attributes' });
        await Products.populate(data.docs, { path: 'Category' });
        return res.status(StatusCodes.OK).json({
            data
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message
        })
    }
}

// website
export async function GET_product_website(req, res) {
    try {
        const {
            _page = 1,
            _limit = 20,
            _search = ''
        } = req.query;
        const options = {
            page: _page,
            limit: _limit
        };
        const querry = {
            sort: { createdAt: -1 }
        }
        if (_search) {
            querry.$and = {
                name_product: { $regex: new RegExp(_search, 'i') }
            }
        }
        const data = await Products.paginate(querry, options);
        await Products.populate(data.docs, { path: 'Attributes' });
        await Products.populate(data.docs, { path: 'Category' });

        for (let i of data.docs) {
            let current_quantity = 0;
            if (i.attributes) {
                i.attributes.varriants.map(value => {
                    value.size.map(data => {
                        current_quantity += data.stock
                    })
                })
                i.stock = current_quantity
            }
        };
        data.docs = data.docs.filter(value => (value.stock > 0) && value);
        return res.status(StatusCodes.OK).json({
            data
        })
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message
        })
    }
}