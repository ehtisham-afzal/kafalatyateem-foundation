"use client";

import {
  deleteHeroImage,
  fetchHeroImages,
} from "@/actions/actions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";
import { useEffect, useState } from "react";
import CloudinaryUploaderWidget from "./CloudinaryUploadwidget";

export default function HeroImagesComp() {
  const [HeroImages, setHeroImages] = useState<
    Array<{ id: number; imageUrl: string }>
  >([]);

  // Fetch Hero Images
  useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchHeroImages();
      setHeroImages(images);
    };
    fetchImages();
  }, []);

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

  const [uwConfig] = useState({
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

  const handleImageDelete = async (id: number, imageUrl: string) => {
    await deleteHeroImage(id)
      .then(() => {
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Card className="overflow-hidden h-fit">
      <CardHeader>
        <CardTitle>Main page hero images</CardTitle>
        <CardDescription>Select Images you want to desplay</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 xl:grid-cols-2 gap-2">
          {HeroImages &&
            HeroImages.length > 0 &&
            HeroImages.map((image, index) => (
              <DropdownMenu key={image.id}>
                <DropdownMenuTrigger asChild>
                  <Image
                    alt="Product image"
                    className={`aspect-square w-full rounded-md object-cover hover:cursor-pointer ${
                      index === 0 &&
                      "col-span-3 xl:col-span-2 aspect-auto row-span-2 xl:row-span-3"
                    }`}
                    height="150"
                    src={image.imageUrl}
                    width="150"
                  />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem
                    onClick={() => handleImageDelete(image.id, image.imageUrl)}
                  >
                    Delete
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
          <CloudinaryUploaderWidget
            className="flex min-w-12 min-h-12 w-full items-center justify-center rounded-md border border-dashed"
            uwConfig={uwConfig}
          />
        </div>
      </CardContent>
    </Card>
  );
}
