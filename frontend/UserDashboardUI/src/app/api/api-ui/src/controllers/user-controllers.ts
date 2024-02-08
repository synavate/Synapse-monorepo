// Handling user requests
import { Request, Response, NextFunction } from "express";
import User from "../models/User.js";
import dotenv from 'dotenv';
import { hash, compare } from "bcrypt"; 
import createToken from "../utils/token-manager.js"
import { COOKIE_NAME, ENV_PATH, PORT } from "../utils/constants.js"

dotenv.config({ path: ENV_PATH });

const environment = process.env.ENVIRONMENT || 'development';
const serviceUrl = environment === 'production' ? process.env.PRODUCTION_SERVICE_URL : process.env.DEVELOPMENT_SERVICE_URL;
console.log(`Service URL for ${environment} environment is set to ${serviceUrl}`);

//Get all Users
export const getAllUsers = async (req: Request, 
                                  res: Response, 
                                  next: NextFunction):Promise<Response> => {
    try {
         // Get all users from MongoDB
         const users = await User.find(); 
         return res.status(200).json({message: "OK", users });    
    } catch (error) {
     return res.status(500).json({message: "ERROR", cause:error.message});
    }
}

export const userLogin = async (req: Request, 
                                res: Response, 
                                next: NextFunction
):Promise <Response> => {
     try {
     //user login
          console.log("Attempting login...");
          const { userName, email, passWord } = req.body;
          const user = await User.findOne({ email });
          if (!user) {
               return res.status(500).send("User not registered");
          }
          const isPasswordCorrect = await compare(passWord, user.passWord);
          if (!isPasswordCorrect) {
               return res.status(500).send("Invalid password");
          }
          //clear sesssion cookie
          res.clearCookie(COOKIE_NAME, 
                         {httpOnly: true,
                         domain: "localhost",
                         path: "/",
                         signed: true});

          const expires = new Date();
          expires.setDate(expires.getDate() + 7);
          const token = createToken(user._id.toString(), user.email, "7d");
          res.cookie(COOKIE_NAME, token, { path: "/", 
                                   domain: "localhost", 
                                   expires,
                                   httpOnly: true,
                                   signed: true });

          
          return res.status(200).json({message: "OK", id:user._id.toString() });    
     } catch (error) {
          console.log(error);
          return res.status(500).json({message: "ERROR!", cause: error.message});
          }
}

export const userSignup = async (req: Request, res: Response, next: NextFunction): Promise<Response | void> => {
     try {
     const signupBody = req.body;
     const {userName, email, passWord} = signupBody;
         console.log("Beginning signup");
         const existingUser = await User.findOne({ email: email });
         console.log(existingUser);
 
         if (existingUser) {
             return res.status(409).send("User already exists");
         }
         
         // Pas the hash
         const hashedPassword = await hash(passWord, 10);
 
         const user = new User({
             name: name,
             email: email,
             password: hashedPassword,
         });
 
         await user.save();
     
     res.clearCookie(COOKIE_NAME, 
          {httpOnly: true,
          domain: "localhost",
          path: "/",
          signed: true});

     const expires = new Date();
     expires.setDate(expires.getDate() + 7);
     const token = createToken(user._id.toString(), user.email, "7d");
     res.cookie(COOKIE_NAME, token, { path: "/", 
                              domain: "localhost", 
                              expires,
                              httpOnly: true,
                              signed: true });
     
     return res.status(201).json({message: "OK", id: user._id.toString() })
     } catch (error) {
     console.log(error);
     return res.status(500).json({message: "ERROR", cause: error});
}}

