import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import "./globals.css";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Home - Babybills",
  description:
    "BabyBills is a modern and responsive Baby Care Store built with Next.js and Tailwind CSS. Designed with a soft, gentle aesthetic, BabyBills offers a delightful shopping experience for parents looking for trusted products for their little ones. The project includes essential features like product categories, flash sales, brand highlights, and trending products—all optimized for performance and SEO. Whether you're selling baby clothes, diapers, toys, or skincare products, BabyBills serves as a perfect template or starter for your eCommerce journey in the baby care niche.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${quicksand.variable}  antialiased`}
        cz-shortcut-listen="true"
      >
         <AppRouterCacheProvider>
        {children}
         </AppRouterCacheProvider>
      </body>
    </html>
  );
}
