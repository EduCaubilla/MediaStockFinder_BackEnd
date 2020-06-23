import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import routerPhoto from './routes/routerPhoto.js';
import routerVideo from './routes/routerVideo.js';



dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// app.use("/", (req, res) => {
//     res.send("Bienvenido a la API");
// });

// app.use('/user', routerUser);
app.use('/photo', routerPhoto);
app.use('/video', routerVideo);
// app.use("*", routerError);



const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log("server running on port: " + PORT));