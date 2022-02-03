import dotenv from "dotenv";

// config .env variables
dotenv.config();

const {
  PORT,
  MONGO_HOST,
  MONGO_USER,
  MONGO_PASSWORD,
  MONGO_DATABASE,
  HOSTNAME,
} = process.env;

const MONGO_OPTIONS = {
  socketTimeoutMS: 30000,
  keepAlive: true,
  autoIndex: false,
  retryWrites: false,
};

const MONGO = {
  host: MONGO_HOST,
  user: MONGO_USER,
  password: MONGO_PASSWORD,
  database: MONGO_DATABASE,
  options: MONGO_OPTIONS,
  url: `mongodb+srv://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DATABASE}`,
};

const SERVER = { hostname: HOSTNAME, port: PORT };

const config = { server: SERVER, mongo: MONGO };

export default config;
