import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata = {
  title: "WeMakeStars",
  description: "Ваш надежный партнер в сфере веб-разработки и создания программного обеспечения",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={montserrat.className}>{children}</body>
    </html>
  );
}
