
const convertOnePxVideo = (data, type) => {

    // console.log(type);
    console.log('entra en convertOnePx');

    let arrMsf = [];

    // console.log(data);
    
    const result = data;

    // console.log(result);
    

        const objMsf = {};
        objMsf.font = type;

        objMsf.idFont = `${result.id}`;
        objMsf.title = 'Untitled';
        objMsf.description = result.tags.join();
        objMsf.authorName = result.user.name;
        // objMsf.authorImage = result.userImageURL;
        objMsf.categories = [];

        objMsf.tags = result.tags;

        objMsf.duration = result.duration;

        objMsf.imageThumb = result.video_pictures[0].picture;
        objMsf.imageSmall = result.video_files[2].link;
        objMsf.imageMedium = result.video_files[1].link;
        objMsf.imageLarge = result.video_files[0].link;

        objMsf.downloadLink = result.video_files[0].link;


        arrMsf.push(objMsf);
    

    // console.log(arrMsf);

    return arrMsf;
}

export default convertOnePxVideo;