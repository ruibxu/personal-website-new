import { Inter } from "next/font/google";
import { Pacifico } from 'next/font/google'
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const pacifico = Pacifico({
  weight: "400", 
  subsets: ["latin"],
  variable: '--font-pacifico',
});

export const metadata = {
  title: "Ruibo's Website",
  description: "Ruibo's personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pacifico.variable}  bg-gradient-to-r from-color1 via-color2 to-color3 animate-gradient `}>
          {children}
      </body>
    </html>
  );
}
