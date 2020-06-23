class Msf {
    constructor(pIdFont, pFont, pTitle, pDescription, pAuthorName, pAuthorImage, pCategories = [], pTags = [], pImageThumb, pImageSmall, pImageMedium, pImageLarge) {
        this.idFont = pIdFont,
            this.font = pFont,
            this.title = pTitle,
            this.description = pDescription,
            this.authorName = pAuthorName,
            this.authorimage = pAuthorImage,
            this.categories = pCategories,
            this.tags = pTags,
            this.imageThumb = pImageThumb,
            this.imageSmall = pImageSmall,
            this.imageMedium = pImageMedium,
            this.imageLarge = pImageLarge
    }
    
}

// incluir metodo msf find para llamar a cada api ?

export default Msf;

// class Persona {
//     constructor(pNombre, pApellidos, pEdad, pAficiones = []) {
//         this.nombre = pNombre;
//         this.apellidos = pApellidos;
//         this.edad = pEdad;
//         this.aficiones = pAficiones;
//     }