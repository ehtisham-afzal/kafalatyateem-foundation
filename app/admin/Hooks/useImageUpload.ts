import { useState } from 'react';

const useImageUpload = () => {
    const [localImage, setLocalImage] = useState<File | null>(null);
    const [uploading, setUploading] = useState<boolean>(false);
    const [error, setError] = useState<string | Error | null>(null);
    const [response, setResponse] = useState<any | null>(null);


    const handleUpload = async () => {
        if (!localImage) {
            return setError("No image selected");
        };

        const formData = new FormData();
        formData.append("file", localImage, localImage.name);
        formData.append("public_id", localImage.name.split(".")[0] || "");
        formData.append("upload_preset", process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET || "");
        //   formdata.append("signature", "");
        //   formdata.append("api_key", "{{api_key}}");
        //   formdata.append("timestamp", "1722074568");


        const requestOptions = {
            method: "POST",
            body: formData,
        };

        try {
            setUploading(true);
            console.log("uploading", localImage.name);
            const response = await fetch("https://api.cloudinary.com/v1_1/sham007/image/upload", requestOptions);
            const result = await response.json();
            setUploading(false);
            console.log("image uploaded and image secure url is ", result.secure_url)
            return setResponse(result);
        } catch (err: any) {
            setError(err.message);
            setUploading(false);
        }
    };

    return {
        localImage,
        setLocalImage,
        uploading,
        error,
        handleUpload,
        response,
    };
};

export default useImageUpload;