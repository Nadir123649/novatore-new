import { sendEmail } from "@/services/mailService";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (request: NextRequest) => {
  const req = await request.json();
  try {
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_FROM_EMAIL || "repotest910@gmail.com",
      to: process.env.NEXT_PUBLIC_TO_EMAIL || "repotest910@gmail.com",
      subject: 'New Contact Form Submission',
      text: `Hi,
          You have received a new submission from the contact form. Here are the details:

          - How We Can Help You?: ${req.help}
          - Name: ${req.fullName}
          - Email: ${req.email}
          - Country: ${req.country}
          - Phone Number: ${req.phone}
          - Message: ${req.message}
          - Subscribe for Updates: ${req.subscribe ? "Yes" : "No"}

          Thanks
      `,
    };
    await sendEmail(mailOptions);
    return NextResponse.json({ message: "Email successfuly sent" });
  } catch (err) {
    return NextResponse.json({ message: "faild", err });
  }
};
