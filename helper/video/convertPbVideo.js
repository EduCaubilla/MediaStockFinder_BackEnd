const convertPbVideo = (data, type) => {

    // console.log(type);
    console.log('entra en convertPbVideo');

    let arrMsf = [];

    const results = data.hits;

    results.forEach((result) => {
        const objMsf = {};
        objMsf.font = type;

        objMsf.idFont = `${result.id}`;
        objMsf.title = 'Untitled';
        objMsf.description = result.tags;
        objMsf.authorName = result.user;
        // objMsf.authorImage = result.userImageURL;
        objMsf.categories = [];

        objMsf.tags = result.tags;

        objMsf.duration = result.duration;

        // console.log(result.videos);
        

        objMsf.imageThumb = result.videos.tiny.url;
        objMsf.imageSmall = result.videos.small.url;
        objMsf.imageMedium = result.videos.medium.url;
        objMsf.imageLarge = result.videos.large.url;

        objMsf.downloadLink = result.videos.large.url;


        arrMsf.push(objMsf);
    })

    // console.log(arrMsf);

    return arrMsf;
}

export default convertPbVideo;