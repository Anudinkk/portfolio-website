import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { ThemeProvider } from "./providers/Theme Provider";

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ["latin"]
});

export const metadata = {
  title: "Portfolio Website",
  description: "portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen bg-white dark:bg-card text-gray-900 dark:text-white">
            <Header />
            <main className="flex-grow mt-20 mb-10">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

