import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import RecoilRootWrapper from "./components/RecoilRootWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FE-03",
  description: "42GG FrontEnd OnBoarding 3rd Project",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecoilRootWrapper>{children}</RecoilRootWrapper>
      </body>
    </html>
  );
}
