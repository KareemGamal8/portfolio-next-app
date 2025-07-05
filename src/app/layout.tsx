import NeonCursor from "@/design-system/components/NeonCursor";
import { Footer, Header } from "@/design-system/layouts/components";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NeonCursor />
        <Header />
        <main className="mb-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
