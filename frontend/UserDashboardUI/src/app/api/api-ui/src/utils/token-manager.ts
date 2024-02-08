//Authentication and Authorization
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { ENV_PATH } from "./constants";

dotenv.config({path: ENV_PATH});


export const createToken = (id: string, email:string, expiresIn:string) => {
    const payload = { id, email };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn
    });
    return token
};

export default createToken
    