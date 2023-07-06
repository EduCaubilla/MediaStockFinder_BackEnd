const convertOnePxVideo = (data, type) => {

    // console.log(type);
    console.log('entra en convertOnePx');

    let arrMsf = [];

    // console.log(data);

    const result = data;

    // console.log(result);


    const objMsf = {};
    objMsf.source = type;

    objMsf.idSource = `${result.id}`;
    objMsf.title = ' ';
    objMsf.description = result.tags.join();
    objMsf.authorName = result.user.name;
    objMsf.authorImage = '';
    objMsf.authorLink = result.user.url;
    objMsf.categories = [];

    objMsf.tags = result.tags;

    objMsf.duration = result.duration;

    objMsf.imageThumb = result.video_pictures[0].picture;
    objMsf.imageSmall = result.video_files[2].link;
    objMsf.imageMedium = result.video_files[1].link;
    objMsf.imageLarge = result.video_files[0].link;

    objMsf.downloadLink = result.video_files[0].link;
    objMsf.imageSourceLink = result.url;
    
    objMsf.media = "video";

    arrMsf.push(objMsf);

    return arrMsf;
}

export default convertOnePxVideo;