import type { Metadata } from "next";
import ReduxProvider from "@/redux/provider";

export const metadata: Metadata = {
  title: "My App",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        test bazi page
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
