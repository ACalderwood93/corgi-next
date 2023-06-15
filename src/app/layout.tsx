import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./overrides.css";

import { Roboto, Poppins } from "next/font/google";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});
export const metadata = {
  title: "Corgi Homeplan",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <nav>navbar</nav>
        <main className="flex">{children}</main>
        <footer>footer</footer>
      </body>
    </html>
  );
}
