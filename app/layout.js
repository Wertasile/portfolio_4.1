import { Geist, Geist_Mono, Inter, Roboto, Rubik, Figtree } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ['latin'],
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Ahmed's Portfolio",
  description: "Portfolio of Full-Stack Developer, Ex-IT Analyst and Computer Engineering Graduate Ahmed",
  robots: {
    index: false,
    follow: false,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.className} ${inter.className} ${figtree.className} ${rubik.className} antialiased`} style={{minHeight:'100vh'}}
      >
        {children}
      </body>
    </html>
  );
}
