// eslint-disable-next-line @typescript-eslint/no-unused-vars
namespace NodeJS {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface ProcessEnv extends NodeJS.ProcessEnv {
    APP_LINK: string;

    NEXTAUTH_URL: string;
    SECRET: string;

    FACEBOOK_ID: string;
    FACEBOOK_SECRET: string;

    GITHUB_ID: string;
    GITHUB_SECRET: string;

    GOOGLE_ID: string;
    GOOGLE_SECRET: string;

    EMAIL_SERVER_USER: string;
    EMAIL_SERVER_PASSWORD: string;
    EMAIL_SERVER_HOST: string;
    EMAIL_SERVER_PORT: number;
    EMAIL_FROM: string;

    DB_USER: string;
    DB_PASSWORD: string;
    DB_NAME: string;
    DATABASE_URL: string;

    IMAGEKIT_PUBLICKEY: string;
    IMAGEKIT_PRIVATEKEY: string;
    IMAGEKIT_URLENDPOINT: string;

    UPSTASH_REDIS_REST_URL: string;
    UPSTASH_REDIS_REST_TOKEN: string;
  }
}
