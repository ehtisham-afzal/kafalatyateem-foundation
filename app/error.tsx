"use client";

import { Button } from "@/components/ui/button";
import { TriangleAlert } from "lucide-react";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col items-center justify-center min-h-[90dvh]">
      <TriangleAlert className="w-1/6 text-red-400 h-1/6" />
      <h2 className="font-normal text-center  md:text-3xl">
        Something went wrong!
      </h2>
      <Button
        size="lg"
        className="mt-4"
        onClick={
          // Attempt to recover by trying to re-render the invoices route
          () => reset()
        }
      >
        Try again
      </Button>
    </main>
  );
}
