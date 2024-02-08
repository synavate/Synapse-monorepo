"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const uuid_1 = require("uuid"); // Importing UUID generator function
const userSchema = new mongoose_1.default.Schema({
    uid: {
        type: String,
        required: true,
        default: uuid_1.v4 // Automatically generate a UUID for each new user
    },
    did: {
        type: String,
        required: false
    },
    userName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensures email addresses are unique across users
    },
    passWord: {
        type: String,
        required: true
    },
    metadata: {
        type: Object,
        required: false
    }
});
exports.default = mongoose_1.default.model("User", userSchema);
