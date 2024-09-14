import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { connectDB } from '../config/database.js'
import Routes_products from './routes/Items/product.js';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

connectDB(process.env.Uri_DB)

// products
app.use('/api', Routes_products)

app.listen(process.env.PORT, () => {
    console.log('Server is running!')
})