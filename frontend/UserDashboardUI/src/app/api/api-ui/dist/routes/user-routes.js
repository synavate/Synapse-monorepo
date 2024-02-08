"use strict";
// API Routes for USER
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controllers_js_1 = require("../controllers/user-controllers.js");
const validators_js_1 = require("../utils/validators.js");
const userRoutes = (0, express_1.Router)();
userRoutes.get("/", user_controllers_js_1.getAllUsers);
userRoutes.post("/signup", (0, validators_js_1.validate)(validators_js_1.signUpValidator), user_controllers_js_1.userSignup);
userRoutes.post("/login", (0, validators_js_1.validate)(validators_js_1.loginValidator), user_controllers_js_1.userLogin);
exports.default = userRoutes;
//# sourceMappingURL=user-routes.js.map