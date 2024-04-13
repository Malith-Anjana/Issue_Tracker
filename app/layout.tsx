import "@radix-ui/themes/styles.css";
import "./theme-config.css"
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import NavBar from "./NavBar";
import { Theme } from "@radix-ui/themes";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ["500", "700"],
  variable:'--font-poppins' 
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
      <Theme accentColor="red">
          <NavBar />
          <main className="p-5">{children}</main>
        </Theme>
      </body>
    </html>
  );
}
