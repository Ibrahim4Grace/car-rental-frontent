import express from 'express';
import session from 'express-session';
import morgan from 'morgan';
import cors from 'cors';
import ejs from 'ejs';

const app = express();

// Set no-cache headers middleware
app.use((req, res, next) => {
  res.header('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  res.header('Pragma', 'no-cache');
  next();
});

// TO CALL OUR EJS
app.set(`view engine`, `ejs`);

//TO BE ABLE TO ACCESS OUR STATIC FILES -- IMG, CSS, VIDEOS
app.use(express.static(`public`));
app.use(express.urlencoded({ extended: false }));

app.use(morgan('tiny'));
app.disable('x-powered-by'); //less hacker know about our stack

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server started on port ${port}`));
