const convertPxVideo = (data, type) => {

    // console.log(type);
    console.log('entra en convertPx Video');

    let arrMsf = [];

    const results = data.videos;

    results.forEach((result) => {
        const objMsf = {};
        objMsf.source = type;

        objMsf.idSource = `${result.id}`;
        objMsf.title = 'Untitled';
        objMsf.description = result.tags.join();
        objMsf.authorName = result.user.name;
        objMsf.authorLink = result.user.url;
        objMsf.authorImage = '';
        objMsf.categories = [];

        objMsf.tags = result.tags;

        objMsf.duration = result.duration;

        objMsf.imageThumb = result.video_pictures[0].picture;
        objMsf.imageSmall = result.video_files[2].link;
        objMsf.imageMedium = result.video_files[1].link;
        objMsf.imageLarge = result.video_files[0].link;

        objMsf.downloadLink = result.video_files[0].link;
        objMsf.imageSourceLink = result.url;

        arrMsf.push(objMsf);
    })

    // console.log(arrMsf);

    return arrMsf;
}

export default convertPxVideo;