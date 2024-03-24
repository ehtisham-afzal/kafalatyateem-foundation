import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const Page = () => {
  return (
    <div className="py-6 space-y-4">
      <h2 className="text-lg font-semibold">Personal Details</h2>
      <div className="grid gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" type="text" placeholder="Enter your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="Enter your email" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" placeholder="Enter your phone number" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input id="country" placeholder="Country" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City</Label>
            <Input id="city" placeholder="City" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address</Label>
          <Input id="address" type="text" placeholder="Type youre address" />
        </div>
      </div>
    </div>
  );
};

export default Page;
