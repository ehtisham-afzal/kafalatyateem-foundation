"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit, Loader2, Upload } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import useImageUpload from "../Hooks/useImageUpload";
import { updateGalleryImageByID } from "@/actions/actions";

type ImageDataTypes = {
  id: number;
  imageUrl: string;
  colSpan?: number;
  rowSpan?: number;
  alt?: string;
};

export default function GalleryUpdateImageDialog({
  ImageData,
}: {
  ImageData: ImageDataTypes;
}) {
  const [data, setData] = useState<ImageDataTypes>(ImageData);
  const {
    localImage,
    setLocalImage,
    uploading,
    error,
    handleUpload,
    response,
  } = useImageUpload();
  

  useEffect(() => {
    if (response) {
      setData((prev) => ({
        ...prev,
        imageUrl: response?.secure_url || "",
        alt: response?.public_id || "",
      }));
    }
  }, [response]);

  useEffect(() => {
    if (localImage) {
      handleUpload();
    }
  }, [localImage]);

  const handleUpdate = async () => {
    if (!data.imageUrl) {
      return;
    }
    return await updateGalleryImageByID(data.id, data.imageUrl, data.alt || "").then(()=> window.location.reload());
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Edit />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit image details</DialogTitle>
          <DialogDescription>
            Make changes to image details. Click save when you&apos;re done.
          </DialogDescription>
        </DialogHeader>
        {uploading ? (
          <div className="flex flex-col items-center justify-center w-full h-40 gap-3 ">
            <p className="text-2xl">Uploding image... </p>
            <Loader2 className="size-10 animate-spin" />
          </div>
        ) : error ? (
          <div>
            <p className="w-full overflow-y-scroll text-red-500 max-h-40">
              {error.toString()}
            </p>
          </div>
        ) : (
          <>
            <div className="grid gap-4 py-4">
              <div className="relative overflow-hidden rounded-md group">
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100">
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
                  <Button variant="outline" size="icon">
                    <Upload />
                  </Button>
                </div>
                <Image
                  className="object-cover w-full rounded-md h-60"
                  width={300}
                  height={300}
                  src={data.imageUrl}
                  alt={data.alt || "Image"}
                />
              </div>
              {data.alt && (
                <div className="grid items-center grid-cols-4 gap-4">
                  <Label htmlFor="alt" className="text-right">
                    Alt text
                  </Label>
                  <Input
                    id="alt"
                    onChange={(e) =>
                      setData((prev) => ({ ...prev, alt: e.target.value }))
                    }
                    value={data.alt}
                    className="col-span-3"
                  />
                </div>
              )}
              <div className="grid items-center grid-cols-4 gap-4">
                <Label htmlFor="URL" className="text-right">
                  Image URL
                </Label>
                <Input
                  disabled
                  id="URL"
                  value={data.imageUrl}
                  className="col-span-3"
                />
              </div>
            </div>
          </>
        )}
        <DialogFooter className="gap-2">
          <DialogClose className="inline-flex items-center justify-center h-10 px-4 py-2 text-sm font-medium transition-colors rounded-md whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Cancel
          </DialogClose>
          <Button onClick={async() => handleUpdate().then(() => console.log("Image updated successfully"))}>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
