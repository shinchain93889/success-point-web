"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  message: z.string().min(10, "Message must be at least 10 characters."),
});

type State = {
  success: boolean;
  message: string;
};

export async function submitContactForm(
  prevState: State,
  formData: FormData
): Promise<State> {
  const validatedFields = contactSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    message: formData.get("message"),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: validatedFields.error.issues[0]?.message ?? "Please check the form fields and try again."
    };
  }

  // Here you would typically send an email, save to a database, etc.
  // We'll simulate a delay and then return a success message.
  console.log("Contact Form Data:", validatedFields.data);
  await new Promise(resolve => setTimeout(resolve, 1000));

  return {
    success: true,
    message: "Thank you for your message! We'll get back to you shortly.",
  };
}
