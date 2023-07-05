
import unsplash from '../../model/photo/modelUnsplash.js';
import pixabay from '../../model/photo/modelPixabay.js';
import pexels from "./modelPexels.js";
import pixabayFindOne from "./modelPixabayFindOne.js";

class PhotoDao {
    constructor() {}

    //----------------------- Unsplash methods

    async searchOne(id) {

      let data = await unsplash.photos.get({
        photoId: id
      });

      return data.response;
    }

  async searchList(search, page) {

      let data = await unsplash.search.getPhotos({
        query: search,
        page: page,
        perPage: 30
      });

      return data.response;
    }

  async random(page) {
      let data = await unsplash.photos.list({
        page: page,
        perPage: 30,
        orderBy: "latest"
      });

      return data.response;
    }

    async searchLatest(page) {

      let data = await unsplash.photos.list({
        page: page,
        perPage: 30,
        orderBy: "latest"
      });

        return data.response;
    }

    async getOneRandom() {

      let data = await unsplash.photos.getRandom({});

      return data.response;
    }

    async downloadPhoto(request) {

      let data;

      await unsplash.photos.get({
        photoId: request
      })
      .then((result) => {
        if (result.type === 'success') {
          const photo = result.response;
          data = photo;
        unsplash.photos.trackDownload({
          downloadLocation: photo.links.download_location,
          });
        }
      })

      return data.response;
    }

    //------------------------- Pixabay methods

    async searchOnePb(id) {
      //console.log("SEARCH ONE PXBAY", id)
      let data = await pixabayFindOne(id);
      return data;
    }

    async searchListPb(search, order, category, page) {
      //console.log("SEARCH PXBAY", search)
      let data = await pixabay(search, order, category, page);
      return data;
    }

    async searchLatestPb(search, order, category, page) {
      //console.log("LATEST PXBAY", order)
      let data = await pixabay(search, order, category, page);
      // console.log(data);
      return data;
    }

    async getOneRandomPb() {

        const search = '';

        let order;

        if (Math.random() >= 0.5) {
            order = 'popular'
        } else {
            order = 'latest'
        }

        const category = '';

        const page = Math.ceil(Math.random() * 10).toString();
        
        console.log(page);
            
        const orientation = 'horizontal';

        let data = await pixabay(search, order, category, page, orientation)

        return data;
    }



    //-------------------------- Pexels methods

    async searchOnePx(id) {
      let data = await pexels.photos
          .show({
              id: id,
          })
      //console.log("Entra SearchOne de Pexels -> " + data);
      return data;
    }

    async searchListPx(query, page) {

        let data = await pexels.photos
            .search({
                query,
                page: page,
                per_page: 30,
            })
        return data;
    }

    async randomPx(page) {

        let data = await pexels.photos.curated({
            page: page,
            per_page: 30
        })
        return data;
    }
}

export default new PhotoDao();