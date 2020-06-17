import {
    toJson
} from "unsplash-js";
import unsplash from '../../model/photo/modelUnsplash'


class PhotoDao {
    constructor() {}

    async searchOne(id) {

        let data = await unsplash.photos.getPhoto(id);

        return toJson(data);

    }

    async searchList(search) {

        let data = await unsplash.search.photos(search, 1, 30);

        return toJson(data);
    }

    async random() {

        let data = await unsplash.photos.listPhotos(1, 5, "latest");

        return toJson(data);

    }

    async dlPhoto(idPhoto) {
        
        // let data = await unsplash.photos.getPhoto(idPhoto);

        // data = toJson(data);

        // const send = await unsplash.photos.downloadPhoto(json)

        // return send;

        return await unsplash.photos.getPhoto(idPhoto)
            .then(toJson)
            .then(json => {
                unsplash.photos.downloadPhoto(json);
            });
    }

    // async catNature(cat) {

    //     let data = await unsplash.search.collections(cat, 1, 30);

    //     return toJson(data);

    // }

    // async catPeople(cat) {

    //     let data = await unsplash.search.collections(cat, 1, 30);

    //     return toJson(data);

    // }

    // async catFoodDrink(cat) {

    //     let data = await unsplash.search.collections(cat, 1, 30);

    //     return toJson(data);

    // }

}

export default new PhotoDao();