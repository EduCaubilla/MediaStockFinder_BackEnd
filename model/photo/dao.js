import {
    toJson
} from "unsplash-js";
import unsplash from '../../model/photo/modelUnsplash';
import pixabay from '../../model/photo/modelPixabay.js';
import {
    searchImages
} from "pixabay-api";
import {
    json
} from "express";

class PhotoDao {
    constructor() {}

    // Unsplash methods

    async searchOne(id) {

        let data = await unsplash.photos.getPhoto(id);

        return toJson(data);

    }

    async searchList(search, page) {



        let data = await unsplash.search.photos(search, page, 30);

        return toJson(data);
    }

    async random(page) {

        let data = await unsplash.photos.listPhotos(page, 30, "latest");

        return toJson(data);

    }

    dlPhoto(idPhoto) {

        // let data = await unsplash.photos.getPhoto(idPhoto);

        // data = toJson(data);

        // const send = await unsplash.photos.downloadPhoto(json)

        // return send;

        return unsplash.photos.getPhoto(idPhoto)
            .then(toJson)
            .then(json => {
                console.log(json);

                // console.log(json.links.download_location);

                // unsplash.photos.downloadPhoto(json.links.download_location);
                unsplash.photos.downloadPhoto(json);
            });
    }

    async searchLatest(page) {

        let data = await unsplash.photos.listPhotos(page, 30, "latest");

        return toJson(data)

    }

    async getOneRandom() {

        let data = await unsplash.photos.getRandomPhoto({
            featured: true
        })

        return toJson(data);
    }

    // Pixabay methods

    async searchListPb(search) {

        let data = await pixabay(search);

        console.log(data);

        return toJson(data);


        // const AUTH_PIXA_KEY = process.env.AUTH_PIXA_KEY;

        // return searchImages(AUTH_PIXA_KEY, search, {
        //         per_page: 3,
        //         // category: "people",
        //         order: "latest"
        //     })
        
    }

}

export default new PhotoDao();