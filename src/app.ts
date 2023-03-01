import express, { Request, Response } from 'express';
import productsRouter from './products/products.routes';
import logger from './middleware/logger.middleware';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from "dotenv";

dotenv.config();

const app = express();
const port = 3000;


// Parse JSON bodies
app.use(express.json());
// Parse URL-encoded bodies
app.use(express.urlencoded({ extended: true }));
// Enable all CORS requests
app.use(cors());
// Adding set of secuirty middleware
app.use(helmet());

app.get('/', (req: Request, res: Response) => {  
    res.send('Hello World from the Golf Inventory App!');
    console.log(process.env.GREETING);
});

app.use('/', [productsRouter]);

app.listen(port, () => {  
    console.log(`Example app listening at http://localhost:${port}`)
});

if(process.env.NODE_ENV == 'development') {
    // add logger middleware
    app.use(logger);
    console.log(process.env.GREETING + ' in dev mode.')
}