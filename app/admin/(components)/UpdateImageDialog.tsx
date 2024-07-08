"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog, DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Edit } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import CloudinaryUploadWidget from "./CloudinaryUploadwidget";
import { claudinaryConfig } from "./claudinaryConfig";

type ImageDataTypes = {
  id: number;
  imageUrl: string;
  colSpan?: number;
  rowSpan?: number;
  alt?: string;
};

export default function UpdateImageDialog({
  ImageData,
}: {
  ImageData: ImageDataTypes;
}) {
  const uwConfig = claudinaryConfig();

  const [data, setData] = useState<ImageDataTypes>(ImageData);
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
        <div className="grid gap-4 py-4">
          <div className="relative group rounded-md overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex items-center justify-center">
              <Button variant="outline" size="icon">
                <CloudinaryUploadWidget uwConfig={uwConfig} className="" />
              </Button>
            </div>
            <Image
              className="w-full h-60 rounded-md object-cover"
              width={300}
              height={300}
              src={data.imageUrl}
              alt={data.alt || "Image"}
            />
          </div>
          {data.alt && (
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="alt" className="text-right">
                Alt text
              </Label>
              <Input
                id="alt"
                onChange={(e) =>
                  setData((prev) => ({ ...prev, alt: e.target.value }))
                }
                defaultValue={data.alt}
                className="col-span-3"
              />
            </div>
          )}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="URL" className="text-right">
              Image URL
            </Label>
            <Input
              disabled
              id="URL"
              defaultValue={data.imageUrl}
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
