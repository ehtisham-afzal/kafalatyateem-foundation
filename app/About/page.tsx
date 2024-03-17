import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "About",
};

const page = () => {
  return (
    <main className="w-full min-h-[50dvh]">
      <h1>About us</h1>
    </main>
  );
};

export default page;
