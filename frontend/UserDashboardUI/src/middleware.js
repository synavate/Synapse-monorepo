"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = exports.middleware = void 0;
var auth_1 = require("./auth");
Object.defineProperty(exports, "middleware", { enumerable: true, get: function () { return auth_1.auth; } });
exports.config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
};
