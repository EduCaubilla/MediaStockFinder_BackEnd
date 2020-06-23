
const convertPx = (data, type) => {

    // console.log(type);
    console.log('entra en convertPb');

    let arrMsf = [];

    const results = data.photos;

    results.forEach((result) => {
        const objMsf = {};
        objMsf.font = type;

        objMsf.idFont = `${result.id}`;
        objMsf.title = 'Untitled';
        objMsf.description = '';
        objMsf.authorName = result.photographer;
        // objMsf.authorImage = result.userImageURL;
        objMsf.categories = [];

        objMsf.tags = [];

        objMsf.imageThumb = result.src.tiny;
        objMsf.imageSmall = result.src.medium;
        objMsf.imageMedium = result.src.large;
        objMsf.imageLarge = result.src.original;

        objMsf.downloadLink = result.src.original;


        arrMsf.push(objMsf);
    })

    // console.log(arrMsf);

    return arrMsf;
}

export default convertPx;