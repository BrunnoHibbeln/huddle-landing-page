import "./globals.css";

import { Poppins } from "next/font/google";
import { Open_Sans } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "600"],
});

const opensans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
  weight: ["400"],
});

export const metadata = {
  title: "Huddle landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${(poppins.variable, opensans.variable)}`}>
        {children}
      </body>
    </html>
  );
}
