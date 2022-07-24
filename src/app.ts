import express from "express";
import { APP_PORT } from "./config/app.config";

export class App {
    public app: express.Application;
    public port: string | number;

    constructor (routers: string[] | []) {
        this.app = express();
        this.port = APP_PORT || 3000;
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`[INFO] App is up and running on port ${this.port}`);
        });
    }
}