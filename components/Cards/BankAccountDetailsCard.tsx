import { MessageCircleReply } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

export type AccountDetailsTypes = {
  AccountName: string;
  BankName: string;
  AccountNo: string;
  IBANNo?: string;
  SWIFTCode?: string;
  BranchCode?: string;
  BranchName?: string;
  type: string | "microFinance" | "normal";
  currencySupport: string | "Global" | "PKR";
};

const BankAccountDetailsCard = ({
  AccountDetails,
}: {
  AccountDetails: AccountDetailsTypes;
}) => {
  return (
    <Card className="w-80 ">
      <CardHeader>
        <CardTitle>{AccountDetails.BankName}</CardTitle>
        <CardDescription>{AccountDetails.AccountName}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 items-center gap-4 text-sm">
          <p>Account No</p>
          <p className="text-right">{AccountDetails.AccountNo}</p>

          {AccountDetails.IBANNo && (
            <>
              <p>IBAN No</p>
              <p className="text-right">{AccountDetails.IBANNo}</p>
            </>
          )}

          {AccountDetails.SWIFTCode && (
            <>
              <p>SWIFT Code</p>
              <p className="text-right">{AccountDetails.SWIFTCode}</p>
            </>
          )}
          {AccountDetails.BranchCode && (
            <>
              <p>Branch Code</p>
              <p className="text-right">{AccountDetails.BranchCode}</p>
            </>
          )}
          {AccountDetails.BranchName && (
            <>
              <p>Branch Name</p>
              <p className="text-right">{AccountDetails.BranchName}</p>
            </>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full bg-green-500" variant="secondary">
          <a
            href={`https://wa.me/?text=*DONATION%20ACCOUNT*%0a%0AAccount+Title%3A+%0A%2A${
              AccountDetails.AccountName
            }%2A%0A%09%09%09%09%09%09%09%09%0A${
              AccountDetails.BankName
                ? "Bank+Name%3A+%0A%2A" + AccountDetails.BankName
                : ""
            }${
              AccountDetails.BranchName
                ? "%2A%0A%09%09%09%09%09%09%09%09%0ABranch+Name%2A+%0A" +
                  AccountDetails.BranchName
                : ""
            }${
              AccountDetails.BranchCode
                ? "%2A%0A%09%09%09%09%09%09%09%09%0ABranch+Code%2A+%0A" +
                  AccountDetails.BranchCode
                : ""
            }${
              AccountDetails.AccountNo
                ? "%2A%0A%09%09%09%09%09%09%09%09%0AAccount+No%3A+%0A" +
                  AccountDetails.AccountNo
                : ""
            }${
              AccountDetails.IBANNo
                ? "%2A%0A%09%09%09%09%09%09%09%09%0AIBAN+No%3A+%0A" +
                  AccountDetails.IBANNo
                : ""
            }${
              AccountDetails.SWIFTCode
                ? "%2A%0A%09%09%09%09%09%09%09%09%0ASWIFT+Code%3A+%0A" +
                  AccountDetails.SWIFTCode
                : ""
            }`}
          >
            Share On WhatsApp <MessageCircleReply className="size-5 ml-2" />
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BankAccountDetailsCard;
