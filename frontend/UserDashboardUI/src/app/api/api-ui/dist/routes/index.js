"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Routes for API
const express_1 = require("express");
const user_routes_js_1 = __importDefault(require("./user-routes.js"));
const appRouter = (0, express_1.Router)();
appRouter.use("/user", user_routes_js_1.default); //domain/api/v1/user
exports.default = appRouter;
//# sourceMappingURL=index.js.map