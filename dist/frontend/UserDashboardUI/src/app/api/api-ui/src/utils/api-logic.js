"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.logoutUser = exports.deleteUser = exports.getUserData = exports.checkAuthStatus = exports.signupUser = exports.loginUser = void 0;
const axios_1 = __importDefault(require("axios"));
const loginUser = async (email, password) => {
    const res = await axios_1.default.post("/user/login", { email, password });
    if (res.status !== 200) {
        throw new Error("Unable to login");
    }
    const data = await res.data;
    return data;
};
exports.loginUser = loginUser;
const signupUser = async (name, email, password) => {
    const res = await axios_1.default.post("/user/signup", { name, email, password });
    if (res.status !== 201) {
        throw new Error("Unable to Signup");
    }
    const data = await res.data;
    return data;
};
exports.signupUser = signupUser;
// @TODO FIX LINE 27
const checkAuthStatus = async () => {
    const res = await axios_1.default.get("/user"); //add /auth-status
    if (res.status !== 200) {
        throw new Error("Unable to authenticate");
    }
    //const data = console.log("This is a placeholder for when Auth is implemented!")
    const data = await res.data;
    return data;
};
exports.checkAuthStatus = checkAuthStatus;
const getUserData = async (name) => {
    const res = await axios_1.default.get(`/user/${name}`);
    if (res.status !== 200) {
        console.error(`Unable to get user data for ${name}`);
        throw new Error("Unable to get user data");
    }
    const data = await res.data;
    return data;
};
exports.getUserData = getUserData;
const deleteUser = async () => {
    const res = await axios_1.default.delete("/chat/delete");
    if (res.status !== 200) {
        throw new Error("@TODO NOT IMPLEMENTED");
    }
    const data = await res.data;
    return data;
};
exports.deleteUser = deleteUser;
const logoutUser = async () => {
    const res = await axios_1.default.get("/user/logout");
    if (res.status !== 200) {
        throw new Error("Unable to delete chats");
    }
    const data = await res.data;
    return data;
};
exports.logoutUser = logoutUser;
