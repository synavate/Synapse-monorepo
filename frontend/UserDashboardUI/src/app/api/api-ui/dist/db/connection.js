"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.disconnectFromDatabase = exports.connectToDatabase = void 0;
// MongoDB Connection 
const mongoose_1 = require("mongoose");
const constants_js_1 = require("../utils/constants.js");
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: constants_js_1.ENV_PATH });
async function connectToDatabase() {
    try {
        await (0, mongoose_1.connect)(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log(error);
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
//# sourceMappingURL=connection.js.map