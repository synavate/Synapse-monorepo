"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectFromDatabase = exports.connectToDatabase = void 0;
// MongoDB Connection 
const mongoose_1 = require("mongoose");
const constants_js_1 = require("../utils/constants.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: constants_js_1.ENV_PATH });
async function connectToDatabase() {
    try {
        await (0, mongoose_1.connect)(process.env.MONGO_URI);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        throw new Error("Cannot connect to MongoDB");
    }
    ;
}
exports.connectToDatabase = connectToDatabase;
;
async function disconnectFromDatabase() {
    try {
        await (0, mongoose_1.disconnect)();
    }
    catch (error) {
        console.log(error);
        throw new Error("Error Disconnecting from MongoDB");
    }
}
exports.disconnectFromDatabase = disconnectFromDatabase;
