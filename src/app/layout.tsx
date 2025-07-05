import { Footer, Header, NeonCursor } from "@/design-system/components";
import { Toaster } from "react-hot-toast";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-[100vh] flex flex-col">
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 1500,
            style: {
              background: "#0e131b",
              color: "white",
              border: "3px solid #0c3847",
              fontWeight: 600,
              fontSize: ".9rem",
            },
          }}
        />
        <NeonCursor />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
