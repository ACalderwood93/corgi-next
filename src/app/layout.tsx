import "./globals.css";
import "flowbite";
import { Roboto, Poppins } from "next/font/google";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Head from "next/head";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata = {
  title: "Boiler Cover - CORGI HomePlan",
  description: "Boiler Cover",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" sizes="any" />
      </head>
      <body className={poppins.className}>
        <Navbar />
        <main className="flex w-screen justify-center">{children}</main>
        <Footer />
        <script
          defer={true}
          src="https://cdn.jsdelivr.net/npm/flowbite/dist/flowbite.js"
        ></script>
      </body>
    </html>
  );
}
