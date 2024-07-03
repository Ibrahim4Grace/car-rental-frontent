import express from 'express';
import session from 'express-session';
import path from 'path';
import { fileURLToPath } from 'url';
import customEnv from '../configs/customEnv.js';
import cookieParser from 'cookie-parser';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const middleware = express();

middleware.use(
  session({
    secret: customEnv.sessionSecret, // Provide the secret option here
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }, // Set to true if using https
  })
);

//TO BE ABLE TO ACCESS OUR STATIC FILES -- IMG, CSS, VIDEOS
middleware.use(express.static(path.join(__dirname, '../public')));
middleware.use(express.urlencoded({ extended: false }));
middleware.use(express.json());
middleware.use(cookieParser());

//EJS setup
middleware.set('view engine', 'ejs');

//Absolute Directory Path
middleware.set('views', path.join(__dirname, '../views'));

export default middleware;
