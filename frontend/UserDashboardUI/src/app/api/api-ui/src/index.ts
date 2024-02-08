import app from "./app.js"
import { connectToDatabase } from "./db/connection.js";
import * as dotenv from "dotenv";
import { userSignup } from "./controllers/user-controllers.js";
import { loginUser, signupUser, logoutUser, getUserData } from './utils/api-logic';
dotenv.config();

  // Will be passed from UI to backennd as object
  const newUser = {
    name: "Gary House",
    email: "gary@example.com",
    password: "securePassword123"
};

const PORT = process.env.DB_PORT
console.log("Connecting to Database and starting app...")

//connection and listeners - NEED TO DEFINE SEPARATE WORKFLOWS
connectToDatabase()
.then(() => {
    console.log("Starting app")
    app.listen(PORT, () => console.log("Server is open on port "+PORT));
  })
  .catch( (err) => console.log(err));



// Sign up a new user
userSignup(newUser);

// Get data for a user named "Gary House"
getUserData("Gary House")
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




 



