import { Router } from 'express';
import { GET_product_dashboard, GET_product_website } from '../../controllers/Products/GET.js';
import { POST_products } from '../../controllers/Products/POST.js';

const Routes_products = Router();

Routes_products.get('/products/dashboard', GET_product_dashboard)
Routes_products.get('/products/client', GET_product_website)
Routes_products.post('/products', POST_products)

export default Routes_products;