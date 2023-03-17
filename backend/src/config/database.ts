import 'dotenv/config';
import Configuration from '../utils/types/config-database';

const configuration: { [key: string]: Configuration }  = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'boilerplate_dev',
    host: process.env.DB_HOST,
    logging: false,
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: 'boilerplate_test',
    host: 'localhost',
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    logging: false,
  },
}

export default configuration[process.env.NODE_ENV ?? 'development'];
