"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createToken = void 0;
//Authentication and Authorization
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const createToken = (id, email, expiresIn) => {
    const payload = { id, email };
    const token = jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, {
        expiresIn
    });
    return token;
};
exports.createToken = createToken;
exports.default = exports.createToken;
//# sourceMappingURL=token-manager.js.map