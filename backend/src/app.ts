import path from 'path';
import express from "express";
import morgan from 'morgan';
import cors from 'cors';
import exampleRouter from './routes/example';

// initializations
const app = express();

// settings 
app.set('port', process.env.PORT || 9000);

// middlewares
app.use(morgan('dev'));
app.use(cors())
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.use('/api/example', exampleRouter)

export default app;
