"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); // Make sure to install express
const dotenv_1 = __importDefault(require("dotenv"));
const connection_js_1 = require("./db/connection.js");
const user_controllers_js_1 = require("./controllers/user-controllers.js");
const api_logic_js_1 = require("./utils/api-logic.js"); // Assuming getUserData is properly exported
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000; // It's common to use PORT instead of DB_PORT for the server port
// Middleware to parse JSON bodies
app.use(express_1.default.json());
// Connect to the database
console.log('Connecting to Database and starting app...');
(0, connection_js_1.connectToDatabase)().then(() => {
    console.log('Database connected. Starting app...');
    app.listen(PORT, () => console.log(`Server is open on port ${PORT}`));
}).catch((err) => console.log(err));
// Routes
// Assuming userSignup and getUserData are express middleware functions that handle requests and responses
app.post('/signup', user_controllers_js_1.userSignup);
app.get('/user/:name', api_logic_js_1.getUserData);
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
