import localFont from "next/font/local";
import "./globals.css";
import Sidebar from "./components/Sidebar";
import Searchbar from "./components/Searchbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Anhad Tech. Watch Tower",
  description: "Personal Project",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Searchbar />
        <div className="bg-neutral-100 overflow-hidden flex flex-row">
          <Sidebar />
          <div className="flex flex-col flex-1">
            {children}
          </div>
        </div>
        
      </body>
    </html>
  );
}
