import dotenv from 'dotenv';

dotenv.config();

const customEnv = {
  port: process.env.PORT,

  nodeEnv: process.env.NODE_ENV || 'development',

  sessionSecret: process.env.SESSION_SECRET,
};

export default customEnv;
