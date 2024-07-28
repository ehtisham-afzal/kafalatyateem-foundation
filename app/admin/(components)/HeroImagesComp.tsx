"use client"
import { deleteHeroImage, fetchHeroImages } from "@/actions/actions";
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
import { Upload, UploadCloudIcon } from "lucide-react";
import Image from "next/image";
import { unstable_noStore as noStore } from "next/cache";
import { useEffect, useState } from "react";

export default function HeroImagesComp() {
  noStore()
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

  const handleUploadHeroImage = async()=> {

  }

  return (
    <Card className="overflow-hidden h-fit">
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
          <Button variant="ghost" className="flex items-center justify-center w-full border border-dashed rounded-md min-w-12 min-h-12">
            <Upload className="size-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
