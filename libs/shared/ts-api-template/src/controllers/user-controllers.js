"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userSignup = exports.userLogin = exports.getAllUsers = void 0;
const User_js_1 = __importDefault(require("../models/User.js"));
const bcrypt_1 = require("bcrypt");
const token_manager_js_1 = __importDefault(require("../utils/token-manager.js"));
const constants_js_1 = require("../utils/constants.js");
//Get all Users
const getAllUsers = async (req, res, next) => {
    try {
        // Get all users from MongoDB
        const users = await User_js_1.default.find();
        return res.status(200).json({ message: "OK", users });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
};
exports.getAllUsers = getAllUsers;
const userLogin = async (req, res, next) => {
    try {
        //user login
        console.log("Attempting login...");
        const { email, password } = req.body;
        const user = await User_js_1.default.findOne({ email });
        if (!user) {
            return res.status(500).send("User not registered");
        }
        const isPasswordCorrect = await (0, bcrypt_1.compare)(password, user.password);
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
        //user signup
        console.log("Beginning signup");
        const { name, email, password } = req.body;
        console.log(email);
        const existingUser = await User_js_1.default.findOne({ email });
        console.log(existingUser);
        if (existingUser)
            return res.status(401).send("User already exists");
        // hash password for storage
        const hashedPassword = await (0, bcrypt_1.hash)(password, 10);
        const user = new User_js_1.default({ name, email, password: hashedPassword });
        await user.save();
        // Create token and cookie
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
        return res.status(500).json({ message: "ERROR", cause: error.message });
    }
};
exports.userSignup = userSignup;
