import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FAR Gym Center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar/>
      {children}
      <Footer/>
      </body>
    </html>
  );
}
