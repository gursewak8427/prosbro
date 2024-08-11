import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./redux/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prosbro",
  description: "billing software for construction and renovation contractors in canada",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
