const convertPx = (data, type) => {

    // console.log(type);
    console.log('entra en convertPx');

    let arrMsf = [];

    const results = data.photos;

    results.forEach((result) => {
        const objMsf = {};
        objMsf.source = type;

        objMsf.idSource = result.id;
        objMsf.title = 'Untitled';
        objMsf.description = '';
        objMsf.authorName = result.photographer;
        objMsf.authorImage = '';
        objMsf.authorLink = result.photographer_url;

        objMsf.categories = [];

        objMsf.tags = [];

        objMsf.imageThumb = result.src.small;
        objMsf.imageSmall = result.src.tiny;
        objMsf.imageMedium = result.src.large;
        objMsf.imageLarge = result.src.large2x;

        objMsf.downloadLink = result.src.original;
        objMsf.imageSourceLink = result.url;


        arrMsf.push(objMsf);
    })

    // console.log(arrMsf);

    return arrMsf;
}

export default convertPx;