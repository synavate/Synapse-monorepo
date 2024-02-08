"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ENV_PATH = exports.COOKIE_NAME = void 0;
// CONSTANT VALUES
const path_1 = __importDefault(require("path"));
exports.COOKIE_NAME = "auth_token";
exports.ENV_PATH = path_1.default.join('./', '..', '.env');
//# sourceMappingURL=constants.js.map