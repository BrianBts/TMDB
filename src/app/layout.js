import "./globals.css";
import { Montserrat, Inter } from "next/font/google";
import { ChakraProvider } from "@chakra-ui/react";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata = {
  title: "The movie Database",
  description: "Web platform focused on films and series.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable}`}>
      <body>
        <ChakraProvider> {children}</ChakraProvider>
      </body>
    </html>
  );
}
