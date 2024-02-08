// Main application
import express from "express";
import * as dotenv from "dotenv";
import morgan from "morgan";
import appRouter from "./routes/index.js";
import cookieParser from "cookie-parser";
import { ENV_PATH } from "./utils/constants.js";
import cors from "cors";

dotenv.config({path: ENV_PATH});
const app = express();

const environment = process.env.ENVIRONMENT || 'development';
const serviceUrl = environment === 'production' ? process.env.PRODUCTION_SERVICE_URL : process.env.DEVELOPMENT_SERVICE_URL;
console.log(`Service URL for ${environment} environment is set to ${serviceUrl}`);

// Cross origin protection
const corsOptions = {
    origin: function (origin: null, callback: any) {
      //Using CORS middlewarae to call API from origin localhost and PORT

      if (origin === process.env.PRODUCTION_SERVICE_URL || origin === process.env.DEVELOPMENT_SERVICE_URL) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    credentials: true
  };

//middleware
app.use(cors(corsOptions));  
app.use(express.json());
  

//remove for prod
app.use(morgan("dev")); 
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use("/api/v1", appRouter);
 
 
export default app;