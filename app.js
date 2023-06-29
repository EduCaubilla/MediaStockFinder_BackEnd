import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routerUser from './routes/routerUser.js';
import routerPhoto from './routes/routerPhoto.js';
import routerVideo from './routes/routerVideo.js';
import routerError from './routes/routerError.js';

dotenv.config();

const app = express();

var corsOptions = {
  httpOnly: true,
  secure: true,
  sameSite: 'none',
}

app.use(cors(corsOptions));
app.use(express.json());


app.use('/user', routerUser);
app.use('/photo', routerPhoto);
app.use('/video', routerVideo);
app.use("*", routerError);


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log("server running on port: " + PORT));