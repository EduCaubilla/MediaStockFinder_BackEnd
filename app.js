import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routerUser from './routes/routerUser.js';
import routerPhoto from './routes/routerPhoto.js';
import routerVideo from './routes/routerVideo.js';
import routerError from './routes/routerError.js';

dotenv.config();

const app = express();

const allowedOrigins = [
  'https://mediastockfinder.netlify.app',
  'http://localhost:5173' // For local development
];

const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (like mobile apps, curl, etc.)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true, // If you send cookies or auth headers
};

app.use(cors(corsOptions));
app.use(express.json());


app.use('/user', routerUser);
app.use('/photo', routerPhoto);
app.use('/video', routerVideo);
app.use('/error', routerError);


const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log("server running on port: " + PORT));
