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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const connection_js_1 = require("./db/connection.js");
const dotenv = __importStar(require("dotenv"));
const user_controllers_js_1 = require("./controllers/user-controllers.js");
const api_logic_1 = require("./utils/api-logic");
dotenv.config();
// Will be passed from UI to backennd as object
const newUser = {
    name: "Gary House",
    email: "gary@example.com",
    password: "securePassword123"
};
const PORT = process.env.DB_PORT;
console.log("Connecting to Database and starting app...");
//connection and listeners - NEED TO DEFINE SEPARATE WORKFLOWS
(0, connection_js_1.connectToDatabase)()
    .then(() => {
    console.log("Starting app");
    app_js_1.default.listen(PORT, () => console.log("Server is open on port " + PORT));
})
    .catch((err) => console.log(err));
// Sign up a new user
(0, user_controllers_js_1.userSignup)(newUser);
// Get data for a user named "Gary House"
(0, api_logic_1.getUserData)("Gary House")
    .catch(err => console.log(err));
/* TESTING CLOSING SO I DON'T NEED TO KILL THE CONNECTION KEENNNNTT

process.on('SIGINT', () => {
  server.close(() => {
    console.log('\nGracefully shutting down from SIGINT (Ctrl+C)');
    console.log('Server closed!!');
    process.exit(0);
  });
});

process.on('SIGUSR2', () => {
  server.close(() => {
      process.kill(process.pid, 'SIGUSR2');
  });
});
*/
//# sourceMappingURL=index.js.map