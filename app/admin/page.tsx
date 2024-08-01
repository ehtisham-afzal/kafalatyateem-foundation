import HeroImagesComp from "./(components)/HeroImagesComp";
import MainPageGalleryPhots from "./(components)/MainPageGalleryPhotos";
import Statistics from "./(components)/Statistics";
import AdminHeader from "./(components)/AdminHeader";


// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { Input } from "@/components/ui/input"
// import { Label } from "@/components/ui/label"


// export function LoginForm() {
//   return (
//     <Card className="w-full max-w-sm">
//       <CardHeader>
//         <CardTitle className="text-2xl">Login</CardTitle>
//         <CardDescription>
//           Enter your email below to login to your account.
//         </CardDescription>
//       </CardHeader>
//       <CardContent className="grid gap-4">
//         <div className="grid gap-2">
//           <Label htmlFor="email">Email</Label>
//           <Input id="email" type="email" placeholder="m@example.com" required />
//         </div>
//         <div className="grid gap-2">
//           <Label htmlFor="password">Password</Label>
//           <Input id="password" type="password" required />
//         </div>
//       </CardContent>
//       <CardFooter>
//         <Button className="w-full">Sign in</Button>
//       </CardFooter>
//     </Card>
//   )
// }


export default function Dashboard() {
  return (
    <div className="flex flex-col w-full max-w-full min-w-full min-h-screen">
      <AdminHeader />
      <main className="z-0 flex flex-col flex-1 w-full gap-4 p-4 md:gap-8 md:p-8">
        <Statistics />
        <div className="grid gap-4 md:gap-8 lg:grid-cols-3 xl:grid-cols-4">
          <MainPageGalleryPhots />
          <HeroImagesComp />
        </div>
      </main>
    </div>
  );
}
