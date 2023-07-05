const convertUns = (data, type) => {

    let arrMsf = [];

    let results;

    data.results === undefined ? results = data : results = data.results;

    for (let index = 0; index < results.length; index++) {
        const result = results[index];
        const objMsf = {};
        objMsf.source = type;

        objMsf.idSource = result.id;
        objMsf.title = result.alt_description;
        objMsf.description = result.description;
        objMsf.authorName = result.user.name;
        objMsf.authorImage = result.user.profile_image;
        objMsf.authorLink = result.user.links.html;
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
        objMsf.imageSourceLink = result.links.html;

        arrMsf.push(objMsf);
    }
  
    return arrMsf;
}

export default convertUns;