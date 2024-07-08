import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { GalleryPhotos } from "@/lib/Data";
import UpdateImageDialog from "./UpdateImageDialog";



export default function MainPageGalleryPhots() {
    return (
      <Card className="w-full lg:col-span-2 xl:col-span-3">
        <CardHeader>
          <CardTitle>Gallery photos</CardTitle>
          <CardDescription>Manage main page gallery phtos here.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px] sm:table-cell">Image</TableHead>
                <TableHead>Alt text</TableHead>
                <TableHead className="hidden lg:table-cell">Col-span</TableHead>
                <TableHead className="hidden lg:table-cell">Row-span</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {GalleryPhotos.map((photo, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Image
                      alt={photo.alt}
                      className="rounded-md object-cover h-full aspect-square"
                      height="50"
                      src={photo.src}
                      width="50"
                    />
                  </TableCell>
                  <TableCell>{photo.alt}</TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {photo.colSpan}
                  </TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {photo.rowSpan}
                  </TableCell>
                  <TableCell>
                    <UpdateImageDialog ImageData={{...photo , imageUrl : photo.src, id : index}} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Showing <strong>6</strong> of <strong>6</strong> Images
          </div>
        </CardFooter>
      </Card>
    );
  }