"use server";

interface DonateFormState {
  message: string;
  errors: {
    amount?: string[];
    name?: string[];
    email?: string[];
    country?: string[];
    [key: string]: string[] | undefined;
  };
}

export async function donateForm(
  prevState: DonateFormState,
  formData: FormData
): Promise<DonateFormState> {
  const amount = formData.get("amount");
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const country = formData.get("country");
  const city = formData.get("city");
  const address = formData.get("address");
  const payment_method = formData.get("payment_method");

  const errors: DonateFormState["errors"] = {};

  // Validate amount
  if (!amount || Number(amount) < 1) {
    errors.amount = ["Amount is required and must be at least 1"];
  }

  // Validate name
  if (!name || String(name).trim().length < 2) {
    errors.name = ["Name is required and must be at least 2 characters"];
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(String(email))) {
    errors.email = ["Please enter a valid email address"];
  }

  // Validate country
  if (!country || String(country).trim().length < 2) {
    errors.country = ["Country is required"];
  }

  // If there are any errors, return them
  if (Object.keys(errors).length > 0) {
    return {
      message: "Please fix the errors below",
      errors,
    };
  }

  try {
    // Here you would typically:
    // 1. Process the donation
    // 2. Save to database
    // 3. Send confirmation emails
    // 4. etc.

    // For now, we'll just simulate a successful donation
    return {
      message: "Thank you for your donation!",
      errors: {},
    };
  } catch (error) {
    return {
      message: "Something went wrong. Please try again later.",
      errors: {},
    };
  }
} 