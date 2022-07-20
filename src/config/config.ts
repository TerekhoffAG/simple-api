import * as dotenv from 'dotenv';
import { env } from 'process';

dotenv.config();

export default {
    appName: env.APP_NAME,
    appEnv: env.APP_ENV,
    appHost: env.APP_HOST,
    appPort: env.APP_PORT,
}