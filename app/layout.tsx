import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const epilogue = Epilogue({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "Intro section with dropdown navigation",
  description: "Intro section with dropdown navigation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={epilogue.className}>
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          {" "}
          <div className="attribution">
            Challenge by{" "}
            <a
              href="https://www.frontendmentor.io?ref=challenge"
              target="_blank"
            >
              Frontend Mentor
            </a>
            . Coded by{" "}
            <a href="https://www.linkedin.com/in/ioannis-nikitopoulos-547a99122/">
              Ioannis Nikitopoulos
            </a>
            .
          </div>
        </footer>
      </body>
    </html>
  );
}
