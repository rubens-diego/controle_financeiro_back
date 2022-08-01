import 'express-async-errors';
import express, { Response, Request, NextFunction } from 'express';
import path from 'path';
import { errors } from 'celebrate';
import { routes } from './routes';
import cors from 'cors';
import AppError from '@shared/errors/AppError';

const app = express();
app.use(cors());
app.use(express.json());
app.use('/v1', routes);
const pathHtml = path.join(__dirname, 'views');

// tem que instalar  o ejs
app.use(express.static(pathHtml));
app.set('views', pathHtml);
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');
app.get('/', (request, response) => {
    return response.render('index.html');
});
app.get('/teste', (request, response) => {
    return response.status(200).json({ok: "ok"})
});

app.use(errors({ statusCode: 400 }));

app.use((error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof AppError) {
        return response.status(error.statusCode).json({
            status: error.statusCode,
            message: error.message,
        });
    }
    return response.status(500).json({
        status: 'error',
        message: 'Internal server error',
        error,
    });
});

export { app };
