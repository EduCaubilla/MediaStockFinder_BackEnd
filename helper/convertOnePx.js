const convertOnePx = (data, type) => {

    // console.log(type);
    console.log('entra en convertOnePx');

    console.log('convertOnePx', data);


    let arrMsf = [];

    const result = data;


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


    // console.log(arrMsf);

    return arrMsf;
}

export default convertOnePx;