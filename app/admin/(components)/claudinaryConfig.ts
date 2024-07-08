export function claudinaryConfig() {

    // Cloudinary Configuration
    // Replace with your own cloud name
    const cloudName = process.env.NEXT_PUBLIC_ALGOLIA_ClOUD_NAME;
    // Replace with your own upload preset
    const uploadPreset = process.env.NEXT_PUBLIC_ALGOLIA_ClOUD_PRESET;

    // Upload Widget Configuration
    // Remove the comments from the code below to add
    // additional functionality.
    // Note that these are only a few examples, to see
    // the full list of possible parameters that you
    // can add see:
    //   https://cloudinary.com/documentation/upload_widget_reference

    return ({
        cloudName,
        uploadPreset,
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        sources: ["local", "url", "camera", "google_drive"], // restrict the upload sources to URL and local files
        // multiple: false,  //restrict upload to a single file
        folder: "KafalatYateemHeroImages", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        maxImageFileSize: 3000000, //restrict file size to less than 3MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
    });
}