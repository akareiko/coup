import localFont from "next/font/local";
import "./globals.css";
import GlassmorphismNavbar from "@/components/navv";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Coup",
  description: "By Iska",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlassmorphismNavbar></GlassmorphismNavbar>
        {children}
      </body>
    </html>
  );
}
