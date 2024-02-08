"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignup = exports.userLogin = exports.getAllUsers = void 0;
const User_js_1 = __importDefault(require("../models/User.js"));
const dotenv_1 = __importDefault(require("dotenv"));
const bcrypt_1 = require("bcrypt");
const token_manager_js_1 = __importDefault(require("../utils/token-manager.js"));
const constants_js_1 = require("../utils/constants.js");
dotenv_1.default.config({ path: constants_js_1.ENV_PATH });
const environment = process.env.ENVIRONMENT || 'development';
const serviceUrl = environment === 'production' ? process.env.PRODUCTION_SERVICE_URL : process.env.DEVELOPMENT_SERVICE_URL;
console.log(`Service URL for ${environment} environment is set to ${serviceUrl}`);
//Get all Users
const getAllUsers = async (req, res, next) => {
    try {
        // Get all users from MongoDB
        const users = await User_js_1.default.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
};
exports.getAllUsers = getAllUsers;
const userLogin = async (req, res, next) => {
    try {
        //user login
        console.log("Attempting login...");
        const { userName, email, passWord } = req.body;
        const user = await User_js_1.default.findOne({ email });
        if (!user) {
            return res.status(500).send("User not registered");
        }
        const isPasswordCorrect = await (0, bcrypt_1.compare)(passWord, user.passWord);
        if (!isPasswordCorrect) {
            return res.status(500).send("Invalid password");
        }
        //clear sesssion cookie
        res.clearCookie(constants_js_1.COOKIE_NAME, { httpOnly: true,
            domain: "localhost",
            path: "/",
            signed: true });
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        const token = (0, token_manager_js_1.default)(user._id.toString(), user.email, "7d");
        res.cookie(constants_js_1.COOKIE_NAME, token, { path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true });
        return res.status(200).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR!", cause: error.message });
    }
};
exports.userLogin = userLogin;
const userSignup = async (req, res, next) => {
    try {
        const signupBody = req.body;
        const { userName, email, passWord } = signupBody;
        console.log("Beginning signup");
        const existingUser = await User_js_1.default.findOne({ email: email });
        console.log(existingUser);
        if (existingUser) {
            return res.status(409).send("User already exists");
        }
        // Pas the hash
        const hashedPassword = await (0, bcrypt_1.hash)(passWord, 10);
        const user = new User_js_1.default({
            name: name,
            email: email,
            password: hashedPassword,
        });
        await user.save();
        res.clearCookie(constants_js_1.COOKIE_NAME, { httpOnly: true,
            domain: "localhost",
            path: "/",
            signed: true });
        const expires = new Date();
        expires.setDate(expires.getDate() + 7);
        const token = (0, token_manager_js_1.default)(user._id.toString(), user.email, "7d");
        res.cookie(constants_js_1.COOKIE_NAME, token, { path: "/",
            domain: "localhost",
            expires,
            httpOnly: true,
            signed: true });
        return res.status(201).json({ message: "OK", id: user._id.toString() });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", cause: error });
    }
};
exports.userSignup = userSignup;
