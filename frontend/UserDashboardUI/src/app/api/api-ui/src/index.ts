import express from 'express'; // Make sure to install express
import * as dotenv from 'dotenv';
import { connectToDatabase } from './db/connection.js';
import { userSignup } from './controllers/user-controllers.js';
import { getUserData } from './utils/api-logic.js'; // Assuming getUserData is properly exported

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000; // It's common to use PORT instead of DB_PORT for the server port

// Middleware to parse JSON bodies
app.use(express.json());

// Connect to the database
console.log('Connecting to Database and starting app...');
connectToDatabase().then(() => {
  console.log('Database connected. Starting app...');
  app.listen(PORT, () => console.log(`Server is open on port ${PORT}`));
}).catch((err) => console.log(err));

// Routes
// Assuming userSignup and getUserData are express middleware functions that handle requests and responses
app.post('/signup', userSignup);
app.get('/user/:name', getUserData);

  
  



 
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




 



