import type { Metadata } from "next";
import { Special_Elite } from "next/font/google";
import "latex.css";

export const metadata: Metadata = {
  title: "asdf",
  description: "Personal page of asdf",
};

const specialElite = Special_Elite({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body id="top">
        <header>
          <h1 className={specialElite.className}>asdf</h1>
          <p className="author">March 2024</p>
        </header>
        {children}
      </body>
    </html>
  );
}
