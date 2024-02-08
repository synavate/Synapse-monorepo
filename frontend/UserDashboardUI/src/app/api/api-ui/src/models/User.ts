 import mongoose from "mongoose";
import { v4 as uuidv4 } from 'uuid'; // Importing UUID generator function

const userSchema = new mongoose.Schema({
  uid: {
    type: String,
    required: true,
    default: uuidv4 // Automatically generate a UUID for each new user
  },
  did: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true // Ensures email addresses are unique across users
  },
  password: {
    type: String,
    required: true
  },
  metadata: {
    type: Object,
    required: false
  }
});

export default mongoose.model("User", userSchema);

