import {
    toJson
} from "unsplash-js";
import unsplash from '../../model/photo/modelUnsplash.js';
import pixabay from '../../model/photo/modelPixabay.js';
import pexels from "./modelPexels.js";
import pixabayFindOne from "./modelPixabayFindOne.js";
// import pexelsOne from "../../model/photo/modelPexelsOne.js";



class PhotoDao {
    constructor() {}

    //----------------------- Unsplash methods

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

    //------------------------- Pixabay methods

    async searchOnePb(id) {
        console.log("SEARCH ONE PXBAY", id)

        let data = await pixabayFindOne(id);

        return toJson(data);

    }

    async searchListPb(search, order, category, page) {

        console.log("SEARCH PXBAY", search)

        let data = await pixabay(search, order, category, page);

        // console.log(data);

        return toJson(data);

    }

    async searchLatestPb(search, order, category, page) {

        console.log("LATEST PXBAY", order)

        let data = await pixabay(search, order, category, page);

        // console.log(data);

        return toJson(data);

    }

    async getOneRandomPb() {

        const search = '';

        const order = 'popular';

        const category = 'backgrounds';


        let data = await pixabay(search, order, category)

        return toJson(data);
    }



    //-------------------------- Pexels methods

    async searchOnePx(id) {

        let data = await pexels.photos
            .show({
                id: id,
            })
        return toJson(data);
    }

    async searchListPx(query, page) {

        let data = await pexels.photos
            .search({
                query,
                page: page,
                per_page: 30,
            })

        // console.log(data);

        return toJson(data);

    }

    async randomPx(page) {

        let data = await pexels.photos.curated({
            page: page,
            per_page: 30
        })

        // console.log(data);

        return toJson(data);

    }


}

export default new PhotoDao();