import "./globals.scss";
import type { Metadata } from "next";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Cursor from "@/components/cursor/Cursor";
import MouseLight from "@/components/mouse-light/MouseLight";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import RevealProvider from "@/components/providers/RevealProvider";

export const metadata: Metadata = {
  title: "Forge & Art | Madera y metal a medida",
  description:
    "Diseño y fabricación de mobiliario, estructuras decorativas y piezas premium en madera y metal.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <SmoothScrollProvider>
          <RevealProvider />
          <MouseLight />
          <Cursor />
          <Navbar />
          {children}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
