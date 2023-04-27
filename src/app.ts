import express from 'express';
import carRouter from './Routers/car.router';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();

app.use(express.json());
app.use('/cars', carRouter);

app.use(ErrorHandler.handle);

export default app;
