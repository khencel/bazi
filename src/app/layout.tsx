import type { Metadata } from "next";
import ReduxProvider from "@/redux/provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/globals.css"

export const metadata: Metadata = {
  title: "My App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="wrapper">
          <Header />
          
          <main className="content">
            <ReduxProvider>{children}</ReduxProvider>
          </main>

          <Footer />
        </div>
      </body>
    </html>
  );
}
