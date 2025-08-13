import * as React from "react";
import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Link,
    Preview,
    Text,
    Tailwind,
} from "@react-email/components";

const baseUrl = process.env.VERCEL_URL || "http://localhost:3000";


 
export const TicketCreated = ({ username, ticketID, content }) => {
    return (
        <Html>
            <Head />
            <Preview>Support Ticket Confirmation Email 🎉</Preview>
            <Tailwind>
                <Body className='bg-white my-auto mx-auto font-sans px-2'>
                    <Container className='border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]'>
                        <Heading className='text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0'>
                            Your Ticket has been created
                        </Heading>
                        <Text className='text-black text-[14px] leading-[24px]'>
                            Hello {username},
                        </Text>
                        <Text className='text-black text-[14px] leading-[24px]'>
                            <strong>Support Ticket</strong> (
                            <Link
                                href={`${baseUrl}/ticket/${ticketID}`}
                                className='text-blue-600 no-underline'
                            >
                                {`#${ticketID}`}
                            </Link>
                            ) has been created successfully.
                        </Text>

                        <Text className='text-black text-[14px] leading-[24px]'>
                            The Support team will review your ticket and get back to you
                            shortly.
                        </Text>

                        <Hr className='border border-solid border-[#eaeaea] my-[26px] mx-0 w-full' />
                        <Text className='text-[#666666] text-[12px] leading-[24px]'>
                            This message was intended for{" "}
                            <span className='text-black'>{username}</span>. If you did not
                            create this ticket, please ignore this email.
                        </Text>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    );
};


export default TicketCreated;