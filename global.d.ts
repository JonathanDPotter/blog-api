declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      HOSTNAME: string;
      NODE_ENV: string;
      GOOGLE_CLIENT_ID: string;
      GOOGLE_CLIENT_SECRET: string;
      MONGO_HOST: string;
      MONGO_USER: string;
      MONGO_PASSWORD: string;
      MONGO_DATABASE: string;
      SERVER_TOKEN_EXPIRETIME: number;
      SERVER_TOKEN_ISSUER: string;
      SERVER_TOKEN_SECRET: string;
    }
  }
}

export {};
