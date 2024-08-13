require('dotenv').config();

module.exports = {
  db: {
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    name: process.env.DB_NAME || 'mydatabase'
  },
  apiKeys: {
    google: process.env.GOOGLE_API_KEY || 'YOUR_GOOGLE_API_KEY'
  },
  server: {
    port: process.env.PORT || 3000
  }
};
