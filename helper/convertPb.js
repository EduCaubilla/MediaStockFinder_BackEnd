const convertPb = (data, type) => {

    // console.log(type);
    console.log('entra en convertPb');

    let arrMsf = [];

    const results = data.hits;

    results.forEach((result) => {
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

        objMsf.imageThumb = result.webformatURL;
        objMsf.imageSmall = result.webformatURL;
        objMsf.imageMedium = result.webformatURL;
        objMsf.imageLarge = result.largeImageURL;

        objMsf.downloadLink = result.largeImageURL;
        objMsf.imageSourceLink = result.pageURL;

        arrMsf.push(objMsf);
    })

    return arrMsf;
}

export default convertPb;