import dotenv from 'dotenv';

dotenv.config();

const customEnv = {
  port: process.env.PORT,

  nodeEnv: process.env.NODE_ENV || 'development',

  sessionSecret: process.env.SESSION_SECRET,

  locationApi: process.env.LOCATION_API,

  backendUrl: process.env.BACKEND_URL,
};

export default customEnv;
