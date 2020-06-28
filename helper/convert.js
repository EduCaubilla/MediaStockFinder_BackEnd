
const convert = (data, type) => {

    // console.log(type);
    // console.log('entra en convert' + data);

    let arrMsf = [];
    const objMsf = {};
    objMsf.font = type;

    if (type === 'unsplash') {
        if (data.results !== undefined) {
            const results = data.results;

            results.forEach((result) => {
                objMsf.idFont = result.id;
                objMsf.title = result.alt_description;
                objMsf.description = result.description;
                objMsf.authorName = result.user.name;
                // objMsf.authorImage = result.user.profile_image;
                objMsf.categories = result.categories;

                objMsf.tags = [];

                if (result.tags !== undefined) {
                    if (result.tags.length > 0) {
                        if (result.tags[0].source !== undefined && result.tags[0].source.ancestry.category !== undefined &&
                            result.tags[0].source.ancestry.subcategory !== undefined) {
                            objMsf.tags.push(result.tags[0].source.ancestry.category.slug);
                            objMsf.tags.push(result.tags[0].source.ancestry.subcategory.slug);
                        }
                    }
                }

                if (result.urls !== undefined) {
                    if (result.urls.thumb !== undefined) {

                        objMsf.imageThumb = result.urls.thumb;
                        objMsf.imageSmall = result.urls.small;
                        objMsf.imageMedium = result.urls.regular;
                        objMsf.imageLarge = result.urls.full;
                    }
                }
                objMsf.downloadLink = result.links.download_location;

                
            });
            arrMsf.push(objMsf);
    
        }
    }
    
    else if (type === 'pixabay') {
        if (data.hits !== undefined) {
            const results = data.hits;

            results.forEach((result) => {
                objMsf.idFont = result.id;
                objMsf.title = '';
                objMsf.description = result.tags;
                objMsf.authorName = result.user;
                objMsf.authorImage = result.userImageURL;
                objMsf.categories = '';

                objMsf.tags = result.tags;

                objMsf.imageThumb = result.previewURL;
                objMsf.imageSmall = result.previewURL;
                objMsf.imageMedium = result.webformatURL;
                objMsf.imageLarge = result.largeImageURL;

                objMsf.downloadLink = result.largeImageURL;

                
            })
            arrMsf.push(objMsf);
        }
    }

    // console.log(objMsf);

    // arrMsf.push(objMsf);


    // console.log(arrMsf);

    return arrMsf;
}

export default convert;