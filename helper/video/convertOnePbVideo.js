const convertOnePbVideo = (data, type) => {

    // console.log(type);
    console.log('entra en convertOnePb');

    console.log('ENTRA DATA', data);
    console.log('ENTRA HITS', data.hits);

    const result = data.hits[0];

    let arrMsf = [];

    const objMsf = {};
    objMsf.source = type;

    objMsf.idSource = result.id;
    objMsf.title = 'Untitled';
    objMsf.description = result.tags;
    objMsf.authorName = result.user;
    objMsf.authorImage = result.userImageURL;
    objMsf.authorLink = `https://pixabay.com/users/${result.user}`;

    objMsf.categories = [];

    objMsf.tags = result.tags;

    objMsf.duration = result.duration;

    objMsf.imageThumb = result.videos.tiny.url;
    objMsf.imageSmall = result.videos.small.url;
    objMsf.imageMedium = result.videos.medium.url;
    objMsf.imageLarge = result.videos.large.url;

    objMsf.downloadLink = result.videos.large.url;
    objMsf.imageSourceLink = result.pageURL;

    arrMsf.push(objMsf);


    console.log(arrMsf);

    return arrMsf;
}

export default convertOnePbVideo;