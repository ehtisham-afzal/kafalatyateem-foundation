export type donateFormTypes = {
    amount: number,
    name: string,
    email: string,
    payment_method: "easyPaise/jazzCash" | "payViaCardOnline" | "directBankTransfer" | "payPal",
    phone?: string,
    country?: string,
    city?: string,
    address?: string
}