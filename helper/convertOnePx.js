const convertOnePx = (data, type) => {

    // console.log(type);
    console.log('entra en convertOnePx');

    console.log('convertOnePx', data);


    let arrMsf = [];

    const result = data;


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
    objMsf.media = "image";

    arrMsf.push(objMsf);

    return arrMsf;
}

export default convertOnePx;