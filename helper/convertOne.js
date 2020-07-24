const convert = (data, type) => {

    console.log(data);

    let arrMsf = [];

    const result = data;

    const objMsf = {};
    objMsf.source = type;

    objMsf.idSource = result.id;
    objMsf.title = result.alt_description;
    objMsf.description = result.description;
    objMsf.authorName = result.user.name;
    objMsf.authorImage = result.user.profile_image.medium;
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

    objMsf.imageThumb = result.urls.thumb;
    objMsf.imageSmall = result.urls.small;
    objMsf.imageMedium = result.urls.regular;
    objMsf.imageLarge = result.urls.full;
    objMsf.downloadLink = result.links.download_location;

    objMsf.imageSourceLink = result.links.html;

    arrMsf.push(objMsf);

    return arrMsf;
}

export default convert;