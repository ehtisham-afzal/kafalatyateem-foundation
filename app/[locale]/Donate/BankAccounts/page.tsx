"use client";
import BankAccountDetailsCard from "@/components/Cards/BankAccountDetailsCard";
import { BankAccounts } from "@/lib/Data";
import { useSearchParams } from "next/navigation";
import React from "react";

const Page = () => {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const currencySupport = searchParams.get("currencySupport");
  const filterBankAccounts = BankAccounts.filter((ac) => {
    return ac.type === type && ac.currencySupport === currencySupport;
  });
  return (
    <div className="grid gap-4 lg:grid-cols-2 py-4">
      {filterBankAccounts.map((ac, i) => {
        return <BankAccountDetailsCard key={i} AccountDetails={ac} />;
      })}
      {filterBankAccounts.length === 0 && (
        <div className="text-center text-gray-500 flex justify-center items-center w-full">
         <p> Please select right payment method</p>
        </div>
      )}
    </div>
  );
};

export default Page;
