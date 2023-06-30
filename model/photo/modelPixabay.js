// import {
//     searchImages
// } from "pixabay-api";
import dotenv from "dotenv";

dotenv.config();

const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

// const pixabay = (search, order, category, page, orientation) => {

//     return searchImages(AUTH_PIXA_KEY, search, {
//         page: page,
//         per_page: 30,
//         category: category,
//         order: order,
//         image_type: "photo",
//         orientation: orientation,
//         min_width: 200
//     })
// }

const pixabay = async (search, order, category, page, orientation) => {

  let query = encodeURIComponent(search);
  let per_page = 30;
  let image_type = "photo";
  let min_width = 200;

  let uri = `https://pixabay.com/api/?key=${AUTH_PIXA_KEY}&q=${query}&category=${category}&order=${order}&page=${page}&orientation=${orientation}&per_page=${per_page}&image_type=${image_type}&min_width=${min_width}`

  console.log("Pixabay request uri ----> " + uri);
  
  const response = await fetch(uri);
  
  const data = await response.json();

  return data;
}

export default pixabay;