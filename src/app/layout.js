import Providers from "@/components/Redux/Provider";
import "../styles/globals.css";
import "../styles/ListUser.css";
import "bootstrap/dist/css/bootstrap.css";
import localFont from "next/font/local";

export const metadata = {
  title: "fetch Data and Task",
  description: "Generated by create next app",
};
export const IranSans = localFont({
  src: "../../public/fonts/IRANSansWeb.ttf",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa">
      <body dir="rtl" className={`${IranSans.className}`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
