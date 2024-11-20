import Container from "@/components/Container";
import SidebarContainer from "@/components/SidebarContainer";
import ReactQueryProvider from "@/providers/ReactQueryProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Duas",
  description: "A Duas app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${inter.className} antialiased max-w-[1800px] w-full`}>
        <ReactQueryProvider>
          <Container>
            <SidebarContainer>{children}</SidebarContainer>
          </Container>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
