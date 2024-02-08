// MongoDB Connection 
import { connect, disconnect } from "mongoose";
import { ENV_PATH } from "../utils/constants.js";
import dotenv from "dotenv";
dotenv.config({path: ENV_PATH});

async function connectToDatabase() {
    try {
        await connect(process.env.MONGO_URI);
        console.log("Connected to MongoDB")
    } catch (error) {
        throw new Error("Cannot connect to MongoDB");
    };
};

async function disconnectFromDatabase() {
    try {
        await disconnect();
    } catch (error) {
            console.log(error);
            throw new Error("Error Disconnecting from MongoDB")
        }
    }

export { connectToDatabase, disconnectFromDatabase };
 