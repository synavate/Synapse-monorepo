import React, { useState } from "react";
import ReactDOM from "react-dom";
import VeridaAuth from './VeridaManager'; // Make sure the import path matches your file structure

import "./styles.css";

function App() {
  const [userDid, setUserDid] = useState<string | null>(null);

  // Initialize the VeridaAuth instance with your configuration
  const veridaAuth = new VeridaAuth({
    contextName: "YourContextName",
    logoUrl: "https://example.com/path/to/your/logo.png", // Ensure this is a valid URL
    // Optionally specify the environment
  });

  // Function to handle user login
  const handleLogin = async () => {
    try {
      await veridaAuth.initialize();
      const did = await veridaAuth.authenticate();
      setUserDid(did); // Update state with the user's DID
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <div className="text-center">
      <h5 className="my-3 h5-responsive">Welcome to Your Application</h5>
      {!userDid ? (
        <button onClick={handleLogin}>Login with Verida</button>
      ) : (
        <div>Welcome, your DID is: {userDid}</div>
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
