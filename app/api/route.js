import { NextRequest, NextResponse } from "next/server";

import { v4 as generateID } from "uuid";
//👇🏻 imports the email template
import TicketCreated from "../../emails/TicketCreated.jsx";
//👇🏻 imports Resend
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
    try {
        const { name, email, content } = await req.json();

        console.log({ name, email, content });

        const data = await resend.emails.send({
            from: "Acme <onboarding@resend.dev>",
            to: ["ahmedmharfan@gmail.com"],
            subject: "Ticket Confirmation Email 🎉",
            react: TicketCreated({ username: name, ticketID: generateID(), content: content }),
        });

        return NextResponse.json({
            message: "Email sent successfully",
            data,
        });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { message: "Error sending email" },
            { status: 500 }
        );
    }
    
}