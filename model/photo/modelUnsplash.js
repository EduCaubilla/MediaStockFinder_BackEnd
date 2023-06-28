import { createApi } from 'unsplash-js';
import dotenv from "dotenv";

dotenv.config();

const AUTH_UNS_KEY = process.env.AUTH_UNS_KEY;

const unsplash = new createApi({
  accessKey: AUTH_UNS_KEY
});

export default unsplash;