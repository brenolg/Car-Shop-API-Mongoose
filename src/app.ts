import express from 'express';
import routes from './Routers';
import ErrorHandler from './Middlewares/ErrorHandler';

const app = express();

app.use(express.json());
app.use('/cars', routes.carRouter);
app.use('/motorcycles', routes.motorcycleRouter);

app.use(ErrorHandler.handle);

export default app;
