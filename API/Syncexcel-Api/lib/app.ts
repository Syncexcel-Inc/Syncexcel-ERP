import express from 'express';
import * as bodyParser from 'body-parser';
import mongoose from 'mongoose';
import 'dotenv/config';
import errorMiddleware from './middleware/error.middleware';
import cors from "cors";

export class App {
    public app: express.Application;
    public port: number;

    constructor(services: any, port: any) {
        this.app = express();
        this.port = port;

        var corsOptions = {
            origin: ' http://localhost:4200',
            optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204 
            }

    this.app.use(cors(corsOptions))

        // const options:cors.CorsOptions = {
        //     allowedHeaders: ["Access-Control-Allow-Origin: *","Origin", "X-Requested-With", "Content-Type", "Accept", "X-Access-Token"],
        //     credentials: true,
        //     methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
        //     origin: " http://localhost:4200",
        //     preflightContinue: false
        //   };

        //   this.app.use(cors(options));

        //   //add your routes
          
        //   //enable pre-flight
        //   this.app.options("*", cors(options));

        this.connectDatabase();
        this.initializeMiddlewares();
        this.initializeServices(services);
        this.initializeErrorHandling();
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
    }

    private initializeServices(services: any) {
        services.forEach((service: any) => {
            this.app.use('/', service.router);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
      }

    private connectDatabase() {
        const {
            //MONGO_USER,
            //MONGO_PASSWORD,
            MONGO_PATH
        } = process.env;
        mongoose.connect(`mongodb://${MONGO_PATH}`);
    }
}