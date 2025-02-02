import Navbar from "@/components/common/Navbar";
import "./globals.css";
import Footer from "@/components/common/Footer";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/pagination";

export const metadata = {
  title: "Any tech",
  description: "This is any tech landing page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main>
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
