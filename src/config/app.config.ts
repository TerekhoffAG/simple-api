import { config } from "dotenv";
import { env } from "process";

config();

export const { 
    APP_NAME, 
    APP_ENV, 
    APP_HOST, 
    APP_PORT 
} = env;