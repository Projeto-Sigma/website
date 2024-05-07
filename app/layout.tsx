import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { Footer, Header } from "./components/prismic";
import "./globals.css";


const inter = Ubuntu({ weight: ['300', '400', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Sigma | Homepage",
  description: "Site oficial do projeto Sigma!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="bg-neutral-100 h-screen w-screen overflow-x-hidden relative">
          <ToastContainer />
          <Header />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
