const config = {
  mongoURL: process.env.MONGO_URL || 'mongodb://localhost:27017/mern-starter',
  port: process.env.PORT || 8080,
  env: process.env.NODE_ENV || 'dev'
};

export default config;
