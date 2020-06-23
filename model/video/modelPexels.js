import {
    createClient
} from "pexels";
import dotenv from "dotenv";

dotenv.config();


const AUTH_PX_KEY = process.env.AUTH_PX_KEY;

const pexels = createClient(AUTH_PX_KEY);


export default pexels;