class Msf {
    constructor(pIdSource, pSource, pSourceLink, pTitle, pDescription, pAuthorName, pAuthorImage, pAuthorLink, pCategories = [], pTags = [], pImageThumb, pImageSmall, pImageMedium, pImageLarge, pMedia) {
        this.idSource = pIdSource,
        this.source = pSource,
        this.sourceLink = pSourceLink,
        this.title = pTitle,
        this.description = pDescription,
        this.authorName = pAuthorName,
        this.authorimage = pAuthorImage,
        this.authorLink = pAuthorLink,
        this.categories = pCategories,
        this.tags = pTags,
        this.imageThumb = pImageThumb,
        this.imageSmall = pImageSmall,
        this.imageMedium = pImageMedium,
        this.imageLarge = pImageLarge,
        this.media = pMedia
    }
    
}

export default Msf;

