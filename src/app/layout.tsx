import NeonCursor from "@/design-system/components/NeonCursor";
import { Header } from "@/design-system/layouts/components";
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
        <main>{children}</main>
      </body>
    </html>
  );
}
