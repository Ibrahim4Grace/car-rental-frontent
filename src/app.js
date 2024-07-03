import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';
import colors from 'colors';
import routes from './routes/index.js';
import middleware from './middlewares/expressMiddleware.js';

dotenv.config();

const app = express();

const corsOptions = {
  origin: ['*'],
  methods: 'GET, HEAD, PUT, PATCH, POST, DELETE',
  httpOnly: true,
  credentials: true,
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

//express session middlewares
app.use(middleware);
app.use(morgan('tiny'));
app.disable('x-powered-by');

// Use routes
app.use(routes);

const port = process.env.PORT || 6000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`.yellow);
});
