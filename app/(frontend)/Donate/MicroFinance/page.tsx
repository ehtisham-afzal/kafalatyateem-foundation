"use client";
import { donateForm, DonateFormState } from "@/actions/donateActions";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { InfoIcon, Loader2 } from "lucide-react";
import { useActionState } from "react";

const Page = () => {
  const initialState = { message: "", errors: {} as DonateFormState["errors"] };
  const [state, formAction, isPending] = useActionState(donateForm, initialState);
  return (
    <div className="py-6 space-y-4">
      <Alert className="bg-yellow-200">
        <InfoIcon className="size-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          The payment method you selected are only availible in pakistan 🇵🇰.
        </AlertDescription>
      </Alert>

      <form action={formAction} className="grid gap-4 py-4">
        <div className="py-2 space-y-2">
          <Label htmlFor="amount">
            <h2 className="text-lg font-semibold">Donation Amount*</h2>
          </Label>
          <Input
            id="amount"
            name="amount"
            type="number"
            min={1}
            placeholder="Amount you want to donate"
          />
          {state?.errors?.amount &&
            state.errors.amount.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div>
        <h2 className="text-lg font-semibold">Personal Details</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name*</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
            {state?.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email*</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            {state?.errors?.email &&
              state.errors.email.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Enter youre phone number"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="city">City (optional)</Label>
            <Input id="city" name="city" type="text" placeholder="City" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="address">Address (optional)</Label>
          <Input
            id="address"
            name="address"
            type="text"
            placeholder="Type youre address"
          />
        </div>
        <input
          id="country"
          name="country"
          className="sr-only"
          defaultValue="Pakistan"
        />
        <input
          id="payment_method"
          name="payment_method"
          className="sr-only"
          defaultValue="easyPaise/jazzCash"
        />
        {state?.message && (
          <p className="mt-2 text-sm text-red-500">{state.message}</p>
        )}
        <Button type="submit" className="w-full" disabled={isPending}>
          {isPending && <Loader2 className="size-5 mx-2 animate-spin" />}
          {isPending ? "Submiting..." : "Donate"}
        </Button>
      </form>
    </div>
  );
};

export default Page;
