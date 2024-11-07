"use client";
import { donateForm } from "@/actions/donateActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { useActionState } from "react";

const Page = () => {
  const initialState = { message: "", errors: {} };
  const [state, formAction, isPending] = useActionState(donateForm, initialState);

  return (
    <form action={formAction} className="grid gap-4 py-4">
      <div className="py-2 space-y-2">
        <Label htmlFor="amount">
          <h2 className="text-lg font-semibold">Donation Amount</h2>
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
          <Label htmlFor="name">Name</Label>
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
          <Label htmlFor="email">Email</Label>
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
      <div className="space-y-2">
        <Label htmlFor="phone">Phone (optional)</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone number"
        />
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="country">Country</Label>
          <Input
            id="country"
            name="country"
            type="text"
            placeholder="Country"
          />
          {state?.errors?.country &&
            state.errors.country.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
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
        id="payment_method"
        name="payment_method"
        className="sr-only"
        defaultValue="directBankTransfer"
      />
      {state?.message && (
        <p className="mt-2 text-sm text-red-500">{state.message}</p>
      )}
      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending && <Loader2 className="size-5 mx-2 animate-spin" />}
        {isPending ? "Submiting..." : "Donate"}
      </Button>
    </form>
  );
};

export default Page;
