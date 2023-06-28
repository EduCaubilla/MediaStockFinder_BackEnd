import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.MONGODB_URI

console.log(url);

// const connection = mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
// }, (err) => {
//   if (!err) {
//     console.log('MongoDB Connection Succeeded.')
//   } else {
//     console.log('Error in MongoDB connection : ' + err)
//   }
// });

const connection = mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB Connection Established'))
  .catch((err) => {
    if (!err) {
      console.log('MongoDB Connection Succeeded.')
    } else {
      console.log('Error in MongoDB connection : ' + err)
    }
  });

export default connection;