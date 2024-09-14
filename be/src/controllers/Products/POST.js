import Products from "../../models/Items/products.js";
import Category from "../../models/Items/category.js";
import cloudinary from '../../middleware/cloudinary.js';
import Attributes from "../../models/Items/attributes.js";
import { StatusCodes } from "http-status-codes";

export async function POST_products(req, res) {
    try {
        const { name_product, category_id } = req.body;
        const check_name = await Products.find({ name_product });
        if (check_name) {
            return res.status(StatusCodes.BAD_REQUEST).json({
                message: 'Tên sản phẩm đã tồn tại!'
            })
        };
        let name_category = await Category.findOne({
            name_category: 'Chưa phân loại!'
        })
        if (!category_id) {
            if (!name_category) {
                await Category.create({ name_category: 'Chưa phân loại!' })
            }
        }
        const gallery_imgs = req.files;
        const upload_img = gallery_imgs.map(dataImg => (
            cloudinary.uploader.upload(dataImg.path)
        ))
        const secure_imgs = Promise.allSettled(upload_img);
        const arr_gallery = secure_imgs.map(value => value.secure_url);
        const requestBody = {
            ...req.body,
            name_product,
            category_id: category_id ? category_id : name_category._id,
            gallery_product: arr_gallery,
        }
        if (req.body.attributes) {
            const convert_Attributes = JSON.parse(req.body.attributes);
            const varriants = convert_Attributes.map(value => ({
                color: value.color ? value.color : '',
                size: value.size.map(data => ({
                    name_size: data.size ? data.size : '',
                    stock: data.stock ? data.stock : 0,
                    price: data.price ? data.price : 0
                }))
            }))

            const attributes = await Attributes.create(varriants);
            const data_Create_Item = {
                ...requestBody,
                attributes: attributes._id
            }
            await Products.create(data_Create_Item);
            return res.status(StatusCodes.CREATED).json({
                message: 'OK'
            })
        }
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
            message: error.message
        })
    }
}