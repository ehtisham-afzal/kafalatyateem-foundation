"use client";
import {
  deleteHeroImage,
  fetchHeroImages,
  uploadHeroImage,
} from "@/actions/actions";
import { Button } from "@/components/ui/button";
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
import { Loader2, Upload } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import useImageUpload from "../Hooks/useImageUpload";

export default function HeroImagesComp() {
  const {
    localImage,
    setLocalImage,
    uploading,
    error,
    handleUpload,
    response,
  } = useImageUpload();
  const [HeroImages, setHeroImages] = useState<
    Array<{ id: number; imageUrl: string }>
  >([]);

  useEffect(() => {
    // upload the image url to database if the response are okay
    if (response) {
      uploadHeroImage(response.secure_url);
      window.location.reload();
    }
  }, [response]);

  useEffect(() => {
    // upload the image into cloudinary database if the local image is selected
    if (localImage) {
      handleUpload();
    }
  }, [localImage]);

  // Fetch Hero Images
  useEffect(() => {
    const fetchImages = async () => {
      const images = await fetchHeroImages();
      setHeroImages(images);
    };
    fetchImages();
  }, []);

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
    <Card className="max-w-full overflow-hidden h-fit">
      <CardHeader>
        <CardTitle>Main page hero images</CardTitle>
        <CardDescription>Select Images you want to desplay</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-3 gap-2 xl:grid-cols-2">
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
          <Button
            variant="ghost"
            disabled={uploading}
            className="relative flex items-center justify-center w-full border border-gray-300 border-dashed rounded-md bg-gray-50 min-w-12 min-h-12"
          >
            <input
              className="absolute inset-0 opacity-0 cursor-pointer"
              onChange={(e) => {
                const file = e.target.files?.[0] || null;
                if (!file) {
                  console.log("No image selected");
                  return;
                }
                setLocalImage(file);
              }}
              type="file"
            />
            {uploading || error ? (
              <Loader2 className="animate-spin" />
            ) : (
              <Upload className="size-4" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
