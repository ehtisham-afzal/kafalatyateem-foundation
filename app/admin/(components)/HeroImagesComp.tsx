"use client";

import { deleteHeroImage, fetchHeroImages } from "@/actions/actions";
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
import { claudinaryConfig } from "./claudinaryConfig";

export default function HeroImagesComp() {
  const Config = claudinaryConfig();
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
            uwConfig={Config}
          />
        </div>
      </CardContent>
    </Card>
  );
}
