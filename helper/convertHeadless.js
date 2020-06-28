// import msf from './msf.js';

const convert = (data, type) => {

    // console.log(type);
    // console.log('entra en convert' + data);

    let arrMsf = [];

    const results = data;

    results.forEach((result) => {

        const objMsf = {};
        objMsf.font = type;

        switch (type) {
            case 'unsplash':
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
                        } else {
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

                break;
            case 'pexels':
                break;
            case 'pixabay':
                break;
            default:
                console.log('error in the conversion');
        }
        // console.log(objMsf);

        arrMsf.push(objMsf);
    });


    // console.log(arrMsf);

    return arrMsf;
}

export default convert;