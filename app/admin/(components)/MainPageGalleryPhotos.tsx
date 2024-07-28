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
import { getHomePageGalleryPhotos } from "@/actions/actions";
import { unstable_noStore as noStore } from "next/cache";
import GalleryUpdateImageDialog from "./GalleryUpdateImageDialog";



export default async function MainPageGalleryPhots() {
  noStore()
  const galleryPhotos = await getHomePageGalleryPhotos()
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
                <TableHead className="hidden xl:table-cell">Row-span</TableHead>
                <TableHead className="hidden sm:table-cell">Id</TableHead>
                <TableHead>
                  <span className="sr-only">Actions</span>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {galleryPhotos.map((photo, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Image
                      alt={photo.alt}
                      className="object-cover h-full rounded-md aspect-square"
                      height="50"
                      src={photo.imageUrl}
                      width="50"
                    />
                  </TableCell>
                  <TableCell>{photo.alt}</TableCell>
                  <TableCell className="hidden lg:table-cell">
                    {photo.colSpan}
                  </TableCell>
                  <TableCell className="hidden xl:table-cell">
                    {photo.rowSpan}
                  </TableCell>
                  <TableCell className="hidden sm:table-cell">
                    {photo.id}
                  </TableCell>
                  <TableCell>
                    <GalleryUpdateImageDialog ImageData={{...photo , imageUrl : photo.imageUrl, id : photo.id}} />
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